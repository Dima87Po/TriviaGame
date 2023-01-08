import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayService } from '@services/play.service';
import { Trivia, Option } from './models';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  triviasList: Trivia[] = [];
  activeTrivia: any = null;
  selectedIndex = 0;
  wrongAnswerCounter = 0;
  correctAnswersCounter = 0;
  email = ' USERNAME';

  constructor(
    private playService: PlayService,
    private router: Router
    ) {}

  ngOnInit() {
    this.playService.getTrivias().subscribe((data: Trivia[]) => {
      this.triviasList = data;
      this.activeTrivia = this.triviasList[this.selectedIndex];
    });
  }

  selectAnswer(answer: Option) {
    if(answer.correct) {
      this.correctAnswersCounter++;
      this.playService.increaseScore();
    } else {
       this.wrongAnswerCounter++;

       if(this.wrongAnswerCounter === 3) {
        alert(`Game over. Your score: ${this.correctAnswersCounter}`);
        this.router.navigate(['dashboard'])
       }
    }
    
    this.selectedIndex++;

    if (this.selectedIndex === this.activeTrivia.length) {
      alert(`Level completed. Your score: ${this.correctAnswersCounter}`);
      this.router.navigate(['dashboard'])
    }

    this.activeTrivia = this.triviasList[this.selectedIndex];
  }
  
  //ngOnDestroy
}
