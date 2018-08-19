import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  public loginUserModal;

  constructor(private _rootNode: ElementRef, private authService: AuthService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loginUserModal = this._rootNode.nativeElement.children[1];
  }

  showModal(){
    let showButton = this._rootNode.nativeElement.children[0];
    showButton.click();
  }

  onNewValue(val) {
    console.log(val);
  }

  login(): string{
    let token = this.authService.login();
    console.log(token);
    return token;
  }
}
