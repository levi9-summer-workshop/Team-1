import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from '../../survey/survey.model';

@Component({
  selector: 'survey-survey-list-home',
  templateUrl: './survey-list-home.component.html',
  styleUrls: ['./survey-list-home.component.css']
})
export class SurveyListHomeComponent implements OnInit {

 // surveys$: Observable<Survey>[];

  constructor() { }

  ngOnInit() {
  }

}
