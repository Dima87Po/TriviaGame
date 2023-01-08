import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginHomeComponent } from './login-home.component';
import { UIModule } from '../shared/modules/ui/ui.module';


@NgModule({
  declarations: [
    LoginComponent,
    LoginHomeComponent
  ],
  imports: [
    CommonModule,
    UIModule
  ]
})
export class LoginModule { }
