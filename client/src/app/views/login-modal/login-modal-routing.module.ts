import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModalComponent } from './login-modal.component';

const routes: Routes = [
  {
    path: '',
    component: LoginModalComponent,
    outlet: 'modal',
    data: {
      title: 'Login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginModalRoutingModule {}
