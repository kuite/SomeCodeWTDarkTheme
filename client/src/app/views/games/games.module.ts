import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
// Angular

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  declarations: [ GamesComponent ]
})
export class GamesModule { }
