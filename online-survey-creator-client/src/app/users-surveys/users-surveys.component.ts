import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  Survey
} from '../survey/survey.model';
import {
  SurveyService
} from '../survey/survey-service.service';
import {
  SurveyUser
} from '../users/survey-user.model';
import {
  AuthService
} from '../login/auth-service.service';
import {
  identifierModuleUrl
} from '@angular/compiler';
import {
  SurveyStatus
} from '../survey/survey-status';
import {
  Router
} from '../../../node_modules/@angular/router';

@Component({
  selector: 'survey-users-surveys',
  templateUrl: './users-surveys.component.html',
  styleUrls: ['./users-surveys.component.css']
})
export class UsersSurveysComponent implements OnInit {

  userSurveys$: Observable < Survey[] > ;
  currentUser: SurveyUser;
  selectedSurvey: Survey;

  constructor(private surveyService: SurveyService, public authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.currentUser = this.authService.getSurveyUser();
    this.userSurveys$ = this.surveyService.getUserSurveys(this.currentUser.id);
  }


  onSurveyDelete(survey: Survey) {
    this.selectedSurvey = survey;
  }

  onSurveyDeleteSubmit() {
    this.surveyService.deleteSurvey(this.selectedSurvey.id).subscribe(any => {
      this.userSurveys$ = this.surveyService.getUserSurveys(this.currentUser.id);
      this.selectedSurvey = null;
    });
  }

  onCloseSurvey(survey: Survey) {
    this.selectedSurvey = survey;
    this.selectedSurvey.surveyStatus = new SurveyStatus("CLOSED", 2);
    this.selectedSurvey = JSON.parse(JSON.stringify(this.selectedSurvey));
    this.surveyService.closeSurvey(this.selectedSurvey).subscribe(
      survey => {
        this.userSurveys$ = this.surveyService.getUserSurveys(this.currentUser.id);
        this.selectedSurvey = null;
      }
    );
  }

  onResultClick(id: number) {
    if (this.authService.hasRoleAdmin()) {
      this.router.navigate(['survey/' + id + '/result/admin']);
    } else {
      this.router.navigate(['survey/' + id + '/result']);
    }
  }

}
