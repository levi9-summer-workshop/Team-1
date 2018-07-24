import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey.model';
import { SurveyService } from '../survey-service.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'survey-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.css']
})
export class SurveyResultComponent implements OnInit {
survey: Survey;
  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
      this.surveyService.getSurveyById(1).subscribe(
        survey => this.survey = survey
      );
  }

}
