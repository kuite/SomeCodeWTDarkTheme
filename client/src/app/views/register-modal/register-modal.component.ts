import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AccountService } from '../../services/account-service';

@Component({
  selector: 'register-modal',
  templateUrl: 'register-modal.component.html'
})

export class RegisterModalComponent implements OnInit, AfterViewInit {
  public registerUserModal;

  constructor(private _rootNode: ElementRef, private accountService: AccountService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.registerUserModal = this._rootNode.nativeElement.children[1];
  }

  showModal(){
    let showButton = this._rootNode.nativeElement.children[0];
    showButton.click();
  }

  onNewValue(val) {
    console.log(val);
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
}
