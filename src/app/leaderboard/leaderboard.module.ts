import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from './leaderboard.component';
import { UIModule } from '../shared/modules/ui/ui.module';



@NgModule({
  declarations: [
    LeaderboardComponent
  ],
  imports: [
    CommonModule,
    UIModule
  ],
  exports:[
    LeaderboardComponent
  ]
})
export class LeaderboardModule { }
