
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { LoginModalComponent } from './login-modal.component';

@NgModule({
  imports: [
    ModalModule
  ],
  declarations: [ LoginModalComponent ]
})
export class LoginModalModule { }
