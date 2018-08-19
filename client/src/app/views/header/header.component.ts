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
  private IsLogged = false;

  constructor(
    private loginModalService: LoginModalService, 
    private registerModalService: RegisterModalService, 
    private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedSub = this.authService.isLoggedObservable$.subscribe(
      () => { 
        this.IsLogged = this.authService.IsLogged(); 
        console.log(this.authService.IsLogged);
      });
  }

  showLoginModal(){
    console.log('skowLoginModal');
    this.loginModalService.show();
  }

  showRegisterModal(){
    console.log('showRegisterModal');
    this.registerModalService.show();
  }

  ngOnDestroy() {
    console.log('RegisterModalComponent ngOnDestroy');
    this.isLoggedSub.unsubscribe();
  }

}
