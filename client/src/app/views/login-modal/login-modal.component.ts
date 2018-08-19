import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { LoginModalService } from './login-modal.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'login-modal',
  templateUrl: 'login-modal.component.html'
})

export class LoginModalComponent implements OnInit, AfterViewInit {
  public loginUserModal;
  public showButton;
  subscription: Subscription;
  
  constructor(private _rootNode: ElementRef, private accountService: AuthService, private loginModalService: LoginModalService) { }

  ngOnInit() {
    console.log('LoginModalComponent ngOnInit');
  }

  ngAfterViewInit() {
    let showButton = this._rootNode.nativeElement.children[0];
    let loginUserModal = this._rootNode.nativeElement.children[1];

    this.subscription = this.loginModalService.showObservable$.subscribe(() => { showButton.click(); });
  }

  login(): string{
    let token = this.accountService.login();
    console.log('login: ' + token);
    return token;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    console.log('LoginModalComponent ngOnDestroy');
    this.subscription.unsubscribe();
  }
}
