import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey/survey-service.service';
import { Survey } from '../survey/survey.model';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'survey-survey-survey-wrapper',
  templateUrl: './survey-survey-wrapper.component.html',
  styleUrls: ['./survey-survey-wrapper.component.css']
})
export class SurveyWrapperComponent implements OnInit {
  survey1: Survey;
  survey$: Observable<Survey>;
  constructor(public surveyService: SurveyService) {
   }

  ngOnInit() {
    this.survey1 = new Survey(null, null, null, null, null, null, null);
    this.surveyService.getSurveyById(1).subscribe(
      data =>{ this.survey1 = data;
      console.log(data);}
    );
  }

}
