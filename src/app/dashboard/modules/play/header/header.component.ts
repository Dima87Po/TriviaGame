import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  wrongAnswerCounter = 0;

  @Input()
  score = 0;

  @Input()
  email;

ngOnInit() {
  console.log(this.wrongAnswerCounter);
  
}

}
