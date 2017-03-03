import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { appDataService } from '../app-data.service';
import { DeckEntity } from './DeckEntity';
import { CardEntity } from './CardEntity';
/*import {MdGridListModule} from '@angular2-material/gridlist/gridlist';*/
 

@Component({
  selector: 'app-my-favorite-game',
  templateUrl: './my-favorite-game.component.html',
  styleUrls: ['./my-favorite-game.component.css'],
  providers:[appDataService]
})
export class MyFavoriteGameComponent implements OnInit {
  
  constructor (private dataService: appDataService) { 
  
  }
  gameStarted = false;
  firstCard = ""; //set default image urls
  secondCard = ""
  resultMessage = "";
  deck: DeckEntity;
  cardsDrawn: CardEntity[];
  cardValues = { suit: {S:0, H:1, D:2, C:3}, value: {J:11 ,Q:12, K:13, A:14} };

  ngOnInit() {
  }
  startTheGame() {
	
	this.getNewDeck();
  }
    getNewDeck() {
		this.dataService.getDeck().subscribe(
		(data) => {
		this.deck = data;

		this.drawCards();
		//alert(this.deck.deck_id);
		}
	);
}
drawCards()
{
	this.dataService.drawTwoCards(this.deck.deck_id).subscribe(
	(data) => {
	this.cardsDrawn = data.cards;
	this.deck.remaining = this.deck.remaining -2; 
	//alert(this.cardsDrawn[0].code + ", " + this.cardsDrawn[1].code); 
	if(this.cardsDrawn[0].code === this.cardsDrawn[1].code)
	{
		if(this.deck.remaining > 0)
		{
			this.drawCards();
		}
		else
		{
			this.getNewDeck();
		}
	}
	else 
	{
		//play and enjoy the game
		this.firstCard = this.cardsDrawn[0].image;
		if(this.gameStarted == false) { this.gameStarted = true} 
	}
	});
}  

compareCard(guess)
{
	var comparison = 'higher'
	this.secondCard = this.cardsDrawn[1].image;
	var value1 = this.cardsDrawn[0].code.substring(0,1);
	var suit1 = this.cardsDrawn[0].code.substring(1,2);

	var value2 = this.cardsDrawn[1].code.substring(0,1);
	var suit2 = this.cardsDrawn[1].code.substring(1,2);
	
	if(Number(value1) == NaN) { 
		value1 = this.cardValues.value[value1]
		
		}
	if(Number(value2) == NaN) { 
		value2 = this.cardValues.value[value2]
		}

	if(value2 < value1)
	{
		comparison = 'lower';
	}
	else if(value2 == value1 && (this.cardValues.suit[suit2] < this.cardValues.suit[suit1]))
	{
		comparison = 'lower';
	}
	this.resultMessage = "You choosed " + guess;

	if(comparison == guess)
	{
		this.resultMessage += ". You Won!";
	}
	else
	{
		this.resultMessage += ". Better luck next time.";
	}
}
tryAgain() {
		this.firstCard = "";
		this.secondCard = "";
		this.resultMessage = "";

		this.drawCards();
	}
}
