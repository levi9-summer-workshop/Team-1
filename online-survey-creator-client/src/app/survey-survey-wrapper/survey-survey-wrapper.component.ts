import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey/survey-service.service';
import { Survey } from '../survey/survey.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'survey-survey-survey-wrapper',
  templateUrl: './survey-survey-wrapper.component.html',
  styleUrls: ['./survey-survey-wrapper.component.css']
})
export class SurveyWrapperComponent implements OnInit {
  survey1: Survey;
  survey$: Observable<Survey>;
  surveyId: number;
  constructor(public surveyService: SurveyService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.surveyId = params['id']);
  }

  ngOnInit() {
    this.survey1 = new Survey(null, null, null, null, null, null, null);
    this.surveyService.getSurveyById(this.surveyId).subscribe(
      survey => this.survey1 = survey);
  }

}
