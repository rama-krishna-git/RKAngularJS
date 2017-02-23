import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class appDataService {

  constructor(private http: Http) { }
  getDeck()
  {
	return this.http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').map(
	(res)=> res.json());
  }

  drawTwoCards(deckID)
  {
	var url = 'https://deckofcardsapi.com/api/deck/'+deckID+'/draw/?count=2'
	return this.http.get(url).map(
	(res)=> res.json());
  }
}
