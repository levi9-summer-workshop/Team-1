import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SurveyUser } from './users/survey-user.model';
import { AuthService } from './login/auth-service.service';

@Injectable()
export class EmailService {
  API = 'http://localhost:8080/email';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  sendEmail(surveyUser: SurveyUser) {
    return this.httpClient.post(this.API, surveyUser, {headers: this.authService.getAuthHeaders()});
  }
}
