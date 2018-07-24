import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../answer/answer.model';

@Component({
  selector: 'survey-answer-result',
  templateUrl: './answer-result.component.html',
  styleUrls: ['./answer-result.component.css']
})
export class AnswerResultComponent implements OnInit {
  @Input() answers: Answer[];
  constructor() { }

  ngOnInit() {
  }

}
