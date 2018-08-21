import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TabsModule } from 'ngx-bootstrap/tabs';


import { BettingStreamsComponent } from './betting-streams.component';
import { BettingStreamsRoutingModule } from './betting-streams-routing.module';

@NgModule({
  imports: [
    TabsModule,
    BettingStreamsRoutingModule,
    ChartsModule
  ],
  declarations: [BettingStreamsComponent]
})

export class BettingStreamsModule {}
