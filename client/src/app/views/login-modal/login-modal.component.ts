import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { LoginModalService } from './login-modal.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'login-modal',
  templateUrl: 'login-modal.component.html'
})

export class LoginModalComponent implements OnInit, AfterViewInit {
  public Username: string;
  public Password: string;

  public IsLoging = false;
  public ErrorMessage = "";
  private showModalSub: Subscription;
  private hideModalButton: HTMLElement;
  
  constructor(private _rootNode: ElementRef, private authService: AuthService, private loginModalService: LoginModalService) { }

  ngOnInit() {
    console.log('LoginModalComponent ngOnInit');
  }

  ngAfterViewInit() {
    let showModalButton = this._rootNode.nativeElement.children[0] as HTMLElement;
    this.hideModalButton = this._rootNode.nativeElement.children[1] as HTMLElement;

    this.showModalSub = this.loginModalService.showObservable$.subscribe(() => { showModalButton.click(); });
  }

  login(){
    //show loading 
    this.IsLoging = true;
    this.ErrorMessage = "";
    this.authService.login(this.Username, this.Password).subscribe((response) => { 
        if (response == 'ok'){
          //close modal
          this.hideModalButton.click();
        }else{
          //wrong login/password or sth
          this.ErrorMessage = response;
          this.IsLoging = false;
        }
     });
  }

  onHideModal() {
    this.IsLoging = false;
    this.ErrorMessage = "";
    this.Username = "";
    this.Password = "";
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    console.log('LoginModalComponent ngOnDestroy');
    this.showModalSub.unsubscribe();
  }
}
