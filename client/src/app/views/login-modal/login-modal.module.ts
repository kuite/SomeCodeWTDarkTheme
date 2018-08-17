
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { LoginModalComponent } from './login-modal.component';
import { LoginModalRoutingModule } from './login-modal-routing.module';

@NgModule({
  imports: [
    LoginModalRoutingModule,
    ModalModule
  ],
  declarations: [ LoginModalComponent ]
})
export class LoginModalModule { }
