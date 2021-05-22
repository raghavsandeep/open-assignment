import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingModule } from './onboarding/onboarding.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './onboarding/onboarding.module#OnboardingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
