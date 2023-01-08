import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUp1RoutingModule } from './sign-up1-routing.module';
import { SignUp1Component } from './sign-up1.component';


@NgModule({
  declarations: [
    SignUp1Component
  ],
  imports: [
    CommonModule,
    SignUp1RoutingModule
  ]
})
export class SignUp1Module { }
