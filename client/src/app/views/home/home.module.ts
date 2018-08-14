import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    TabsModule,
    HomeRoutingModule,
    ChartsModule
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule { }
