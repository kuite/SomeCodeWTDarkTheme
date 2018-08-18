import { Component, OnInit } from '@angular/core';
import { LoginModalService } from '../login-modal/login-modal.service';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private loginModalService: LoginModalService) { }

  ngOnInit() {
  }

  showLoginModal(){
    console.log('skowLoginModal');
    this.loginModalService.show();
    //this.loginModalComponent.showModal();
    
  }

}
