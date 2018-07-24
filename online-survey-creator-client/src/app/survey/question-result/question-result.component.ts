import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../question/question.model';

@Component({
  selector: 'survey-question-result',
  templateUrl: './question-result.component.html',
  styleUrls: ['./question-result.component.css']
})
export class QuestionResultComponent implements OnInit {
@Input() questions: Question[];

  constructor() { }

  ngOnInit() {
  }

}
