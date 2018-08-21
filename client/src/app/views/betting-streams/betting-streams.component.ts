import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  templateUrl: 'betting-streams.component.html'
})
export class BettingStreamsComponent {

  public VidUrl: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) {
    this.VidUrl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/JqPXMISUYYY");
    console.log(this.VidUrl);
  }

  // kurwa(): SafeResourceUrl{
  //   this.VidUrl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=JqPXMISUYYY");
  //   console.log(this.VidUrl);
  //   return VidUrl;
  // }
  ngAfterViewInit() {

  }


  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }


}
