import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class RegisterModalService {
  private _showSource = new Subject();

  public showObservable$ = this._showSource.asObservable();

  constructor() { }

  show(){
    this._showSource.next();
  }
}