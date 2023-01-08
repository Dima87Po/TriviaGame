import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from './leaderboard.component';
import { UIModule } from '../shared/modules/ui/ui.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LeaderboardComponent
  ],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: LeaderboardComponent
      }
    ])
  ],
  exports:[
    LeaderboardComponent
  ]
})
export class LeaderboardModule { }
