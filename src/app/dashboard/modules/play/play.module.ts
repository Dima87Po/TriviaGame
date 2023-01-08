import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play.component';
import { HeaderComponent } from './header/header.component';
import { UIModule } from '../../../shared/modules/ui/ui.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlayComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UIModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlayComponent
      },
    ])
  ]
})
export class PlayModule { }
