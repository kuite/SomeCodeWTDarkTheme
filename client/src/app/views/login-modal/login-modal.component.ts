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
  showModalSub: Subscription;
  
  constructor(private _rootNode: ElementRef, private authService: AuthService, private loginModalService: LoginModalService) { }

  ngOnInit() {
    console.log('LoginModalComponent ngOnInit');
  }

  ngAfterViewInit() {
    let showButton = this._rootNode.nativeElement.children[0];
    let loginUserModal = this._rootNode.nativeElement.children[1];

    this.showModalSub = this.loginModalService.showObservable$.subscribe(() => { showButton.click(); });
  }

  login(){
    //show loading 
    console.log('login-modal.component login');
    this.authService.login().subscribe((response) => { 
        if (response == 'ok'){
          //close modal
          console.log(response);
        }else{
          //show error
          console.log(response);
        }
     });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    console.log('LoginModalComponent ngOnDestroy');
    this.showModalSub.unsubscribe();
  }
}
