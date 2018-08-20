import { Component, OnInit } from '@angular/core';
import { LoginModalService } from '../login-modal/login-modal.service';
import { RegisterModalService } from '../register-modal/register-modal.service';
import { AuthService } from '../../services/auth-service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 're-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private isLoggedSub: Subscription;
  private IsLogged = true;

  constructor(
    private loginModalService: LoginModalService, 
    private registerModalService: RegisterModalService, 
    private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedSub = this.authService.isLoggedObservable$.subscribe(
      () => { 
        this.IsLogged = this.authService.IsLogged(); 
      });
  }

  showLoginModal(){
    this.loginModalService.show();
  }

  showRegisterModal(){
    this.registerModalService.show();
  }

  ngOnDestroy() {
    this.isLoggedSub.unsubscribe();
  }

}
