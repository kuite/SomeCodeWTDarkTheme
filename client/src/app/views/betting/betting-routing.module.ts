import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BettingComponent } from './betting.component';

const routes: Routes = [
  {
    path: '',
    component: BettingComponent,
    data: {
      title: 'betting'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BettingRoutingModule {}
