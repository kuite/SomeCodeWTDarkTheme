import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { AgGridModule } from 'ag-grid-angular';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { BettingStreamsComponent } from './betting-streams.component';
import { BettingStreamsRoutingModule } from './betting-streams-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TabsModule,
    BettingStreamsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    AgGridModule.withComponents([])
  ],
  declarations: [BettingStreamsComponent]
})

export class BettingStreamsModule {}
