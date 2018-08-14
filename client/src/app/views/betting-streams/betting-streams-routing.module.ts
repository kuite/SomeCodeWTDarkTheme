import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BettingStreamsComponent } from './betting-streams.component';

const routes: Routes = [
  {
    path: '',
    component: BettingStreamsComponent,
    data: {
      title: 'betting streams'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BettingStreamsRoutingModule {}
