import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ChallengesComponent } from './challenges.component';
import { ChallengesRoutingModule } from './challenges-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ChallengesRoutingModule
  ],
  declarations: [
    ChallengesComponent
  ]
})
export class ChallengesModule { }
