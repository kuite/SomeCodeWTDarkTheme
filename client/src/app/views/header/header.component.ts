import { Component, OnInit } from '@angular/core';
import { LoginModalService } from '../login-modal/login-modal.service';
import { RegisterModalService } from '../register-modal/register-modal.service';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private loginModalService: LoginModalService, private registerModalService: RegisterModalService) { }

  ngOnInit() {
  }

  showLoginModal(){
    console.log('skowLoginModal');
    this.loginModalService.show();
  }

  showRegisterModal(){
    console.log('showRegisterModal');
    this.registerModalService.show();
  }

}
