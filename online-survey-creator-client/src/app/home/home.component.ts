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
  surveys$: Observable<Survey[]>;
  base64Credential = btoa("admin" + ':' + "admin");
  headers = new HttpHeaders({
    authorization: 'Basic ' + this.base64Credential
  });
  
  constructor(private router: Router, public authService: AuthService, private surveyService: SurveyService) { }

  ngOnInit() {                                                  
    this.surveys$ = this.surveyService.getPublicSurveys(this.headers);
  }

  redirect(redirectPath: string) {
    this.router.navigate([redirectPath]);
  }

}
