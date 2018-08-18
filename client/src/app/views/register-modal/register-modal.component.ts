import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AccountService } from '../../services/account-service';
import { RegisterModalService } from './register-modal.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'register-modal',
  templateUrl: 'register-modal.component.html'
})

export class RegisterModalComponent implements OnInit, AfterViewInit {
  public registerUserModal;
  subscription: Subscription;
  
  constructor(private _rootNode: ElementRef, private accountService: AccountService, private registerModalService: RegisterModalService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    let showButton = this._rootNode.nativeElement.children[0];
    this.registerUserModal = this._rootNode.nativeElement.children[1];

    this.subscription = this.registerModalService.showObservable$.subscribe(() => { showButton.click(); });
  }

  showModal(){
    let showButton = this._rootNode.nativeElement.children[0];
    showButton.click();
  }

  login(): string{
    let token = this.accountService.login();
    console.log(token);
    return token;
  }

  registerUser( $event ) {
    //this.reg-modal.hide();
    let msg = this.accountService.registerUser();
    console.log(msg);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    console.log('RegisterModalComponent ngOnDestroy');
    this.subscription.unsubscribe();
  }
}
