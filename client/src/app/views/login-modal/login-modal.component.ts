import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AccountService } from '../../services/account-service';
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
  
  constructor(private _rootNode: ElementRef, private accountService: AccountService, private loginModalService: LoginModalService) { }

  ngOnInit() {
    console.log('LoginModalComponent ngOnInit');
    this.subscription = this.loginModalService.showObservable$.subscribe(data => { this.showButton.click(); });
  }

  ngAfterViewInit() {
    this.showButton = this._rootNode.nativeElement.children[0];
    this.loginUserModal = this._rootNode.nativeElement.children[1];
  }

  showModal(){
    console.log('LoginModalComponent.showModal');
    //this.subscription = this.loginModalService.showObservable$.subscribe(data => { this.showButton.click(); });
    //this.showButton.click();
  }

  onNewValue(val) {
    console.log(val);
  }

  login(): string{
    let token = this.accountService.login();
    console.log(token);
    return token;
  }
}
