import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Survey } from '../survey/survey.model';
import { SurveyService } from '../survey/survey-service.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'survey-user-surveys',
  templateUrl: './user-surveys.component.html',
  styleUrls: ['./user-surveys.component.css']
})
export class UserSurveysComponent implements OnInit {

  url: string;
  surveys$: Observable<Survey[]>;
  surveyId: number;

  constructor(public surveyService: SurveyService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.surveyId = params['id']);
  }

  ngOnInit() {
    this.surveys$ = this.surveyService.getUserSurveys(this.surveyId);
  }

  ifNoSurveys() {
    if (this.surveys$.isEmpty() ) {
      return true;
    }
    else {
      return false;
    }
  }

  onSurveyShare(event: string) {
    this.url = event;
  }
  
  onCopyClick(selectedUrl: HTMLInputElement) {
    selectedUrl.focus();
    selectedUrl.select();  
    document.execCommand('copy');
  }

}
