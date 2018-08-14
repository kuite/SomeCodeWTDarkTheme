import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TabsModule } from 'ngx-bootstrap/tabs';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { BettingStreamsComponent } from './betting-streams.component';
import { BettingStreamsRoutingModule } from './betting-streams-routing.module';

@NgModule({
  imports: [
    CollapseModule,
    TabsModule,
    BettingStreamsRoutingModule,
    ChartsModule
  ],
  declarations: [ BettingStreamsComponent ]
})
export class BettingStreamsModule { }
