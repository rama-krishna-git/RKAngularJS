import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { MyFavoriteMovieComponent } from './my-favorite-movie/my-favorite-movie.component';
import { MyFavoriteGameComponent } from './my-favorite-game/my-favorite-game.component';

const Child_ROUTES : Routes = [
  /*{ path: '', redirectTo: '/my-favorite',pathMatch: 'full' },*/
  { path: 'movie',		component: MyFavoriteMovieComponent },
  { path: 'game',		component: MyFavoriteGameComponent },
 ];

@NgModule({
  imports: [
    CommonModule,
	HttpModule,
    JsonpModule,
	RouterModule.forChild(Child_ROUTES)
  ],
  declarations: [   MyFavoriteMovieComponent,MyFavoriteGameComponent]
})
export class MyFavoritesModule { }
