import { NgModule } from '@angular/core';

import { BettingComponent } from './betting.component';
import { BettingRoutingModule } from './betting-routing.module';
// Angular

@NgModule({
  imports: [
    BettingRoutingModule
  ],
  declarations: [ BettingComponent ]
})
export class BettingModule { }
