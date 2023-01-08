import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUp1Component } from './sign-up1.component';

const routes: Routes = [{ path: '', component: SignUp1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUp1RoutingModule { }
