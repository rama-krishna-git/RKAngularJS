import { Component, OnInit } from '@angular/core';
import { appDataService } from '../app-data.service';
import { MovieEntity,CastEntity } from './MovieEntity';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-my-favorite-movie',
  templateUrl: './my-favorite-movie.component.html',
  styleUrls: ['./my-favorite-movie.component.css'],
  providers:[appDataService,MdIconRegistry]
})
export class MyFavoriteMovieComponent implements OnInit {
  movieTitle;
  moviePoster;
  movieGenre = '';
  movieStory;
  movieCast: CastEntity[];

  constructor(private dataService: appDataService) { }
  //myMovie: MovieEntity;

  ngOnInit() {
	this.dataService.getMovieDetails(280).subscribe(
		(data) => {
		this.movieTitle = data.title;
		this.moviePoster = data.poster_path;
		for(let g of data.genres) {
			this.movieGenre += g.name + ", ";
		}
		this.movieStory = data.overview;


		this.moviePoster = data.poster_path;

		//get credits
		this.dataService.getMovieCast(280).subscribe(
		(data) => { 
			this.movieCast = data.cast;
		
		})

		})
  }

}
