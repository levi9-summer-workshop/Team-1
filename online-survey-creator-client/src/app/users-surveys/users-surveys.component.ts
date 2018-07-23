import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Survey } from '../survey/survey.model';
import { SurveyService } from '../survey/survey-service.service';
import { SurveyUser } from '../users/survey-user.model';
import { AuthService } from '../login/auth-service.service';
import { identifierModuleUrl } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'survey-users-surveys',
  templateUrl: './users-surveys.component.html',
  styleUrls: ['./users-surveys.component.css']
})
export class UsersSurveysComponent implements OnInit {

  userSurveys$: Observable<Survey[]>;
  currentUser: SurveyUser;

  constructor(private surveyService: SurveyService, public authService: AuthService) { }

  ngOnInit() {
   this.currentUser = this.authService.getSurveyUser();
   this.userSurveys$ = this.surveyService.getUserSurveys(this.currentUser.id);
  }


  onSurveyDelete() {
   
  }

  onSurveyDeleteSubmit() {
   
  }

}
