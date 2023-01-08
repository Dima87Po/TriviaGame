import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginHomeComponent } from './login-home.component';
import { UIModule } from '../shared/modules/ui/ui.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    LoginHomeComponent,
    SignUpComponent
   
  ],
  imports: [
    CommonModule,
    UIModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginHomeComponent,
        children: [
          
        ]
      }
    ]),
  ]
})
export class LoginModule { }
