import 'hammerjs'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
/*
import { MyFavoritesModule } from './my-favorites/my-favorites.module';

import { MyFavoriteMovieComponent } from './my-favorites/my-favorite-movie/my-favorite-movie.component';
import { MyFavoriteGameComponent } from './my-favorites/my-favorite-game/my-favorite-game.component';

*/

import { MaterialModule  } from '@angular/material';

const APP_ROUTES : Routes = [
  {path: 'my-favorite',loadChildren:'./my-favorites/my-favorites.module#MyFavoritesModule'}

  /*
  { path: 'my-favorite-movie',		component: MyFavoriteMovieComponent },
  { path: 'my-favorite-game',		component: MyFavoriteGameComponent },
  { path: '',						component: AppComponent }
  */
];


@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	MaterialModule,
	RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
