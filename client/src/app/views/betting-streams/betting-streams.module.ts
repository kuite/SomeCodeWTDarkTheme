import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


import { BettingStreamsComponent } from './betting-streams.component';
import { BettingStreamsRoutingModule } from './betting-streams-routing.module';

@NgModule({
  imports: [
    TabsModule,
    BettingStreamsRoutingModule,
    ChartsModule
  ],
  declarations: [BettingStreamsComponent]
})

export class BettingStreamsModule {
  public VidUrl: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer){
    this.VidUrl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=JqPXMISUYYY");
    console.log(this.VidUrl);
  }

}
