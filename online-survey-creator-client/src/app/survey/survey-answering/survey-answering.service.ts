import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { AuthService } from '../../login/auth-service.service';

@Injectable()
export class SurveyAnsweringService {

  API = 'http://localhost:8080/answers';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  submitAnswers(ids: number[]) {
    return this.httpClient.post(this.API, ids, {headers: this.authService.getAuthHeaders()})
  }

}
