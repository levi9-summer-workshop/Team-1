import { Component, OnInit, Input } from '@angular/core';
import { Question } from './question.model';
import { CreateSurveyService } from '../survey/create-survey.service';
import { Survey } from '../survey/survey.model';

@Component({
  selector: 'survey-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
