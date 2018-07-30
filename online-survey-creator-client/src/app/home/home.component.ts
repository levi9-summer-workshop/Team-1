import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth-service.service';
import { SurveyService } from '../survey/survey-service.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { UsersService } from '../users/users-service.service';
import { Survey } from '../survey/survey.model';

@Component({
  selector: 'survey-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm: string;
  surveys$: Observable<Survey[]>;
  base64Credential = btoa("admin" + ':' + "admin");
  headers = new HttpHeaders({
    authorization: 'Basic ' + this.base64Credential
  });
  
  constructor(private router: Router, public authService: AuthService, private surveyService: SurveyService) { }

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      this.surveys$ = this.surveyService.getAllSurveys();
    } else {
      this.surveys$ = this.surveyService.getPublicSurveys(this.headers);
    }                                                  
    
  }

  redirect(redirectPath: string) {
    this.router.navigate([redirectPath]);
  }

searchSurveys(searchTerm: string){
  if(this.authService.isAuthenticated()) { // authenticated user can search all surveys
    if(searchTerm) {
    this.surveys$ = this.surveyService.getSearchByDescriptionSurveys(searchTerm); // set filtered surveys
    } else {
    this.surveys$ = this.surveyService.getAllSurveys(); //set all surveys if searchTerm is empty
    }
  } else { // not authenticated user can only search public surveys
    if(searchTerm) {       
      this.surveys$ = this.surveyService.getSearchOpenedSurveysByDescription(searchTerm, this.headers); // set filtered surveys
      } else {
        this.surveys$ = this.surveyService.getPublicSurveys(this.headers); // set all public surveys if searchTerm is empty
      }
  }
}

}
