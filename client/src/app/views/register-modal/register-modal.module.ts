
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { RegisterModalComponent } from './register-modal.component';
import { RegisterModalRoutingModule } from './register-modal-routing.module';

@NgModule({
  imports: [
    RegisterModalRoutingModule,
    ModalModule
  ],
  declarations: [ RegisterModalComponent ]
})
export class RegisterModalModule { }
