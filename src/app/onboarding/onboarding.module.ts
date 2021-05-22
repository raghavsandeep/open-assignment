import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    NgxSliderModule
  ]
})
export class OnboardingModule { }
