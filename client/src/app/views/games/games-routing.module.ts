import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './games.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    data: {
      title: 'games'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
