import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play.component';
import { HeaderComponent } from './header/header.component';
import { UIModule } from '../shared/modules/ui/ui.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PlayComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlayComponent
      }
    ])
  ]
})
export class PlayModule { }
