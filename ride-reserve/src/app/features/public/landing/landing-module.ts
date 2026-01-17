import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing-module';
import { Landing } from './landing/landing';


@NgModule({
  declarations: [
    Landing
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  exports:[Landing]
})
export class LandingModule { }
