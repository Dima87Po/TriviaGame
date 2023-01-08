import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './models';
import { LeaderboardService } from './services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {

  topUsers: Observable<IUser[]>;

  constructor(
    private leaderboardService: LeaderboardService
  ) {
  }

  ngOnInit() {
    this.topUsers = this.leaderboardService.getTopUsers();
    console.log(this.topUsers);
    
  }


}
