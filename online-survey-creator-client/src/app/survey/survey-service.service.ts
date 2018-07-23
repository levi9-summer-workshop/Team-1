import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/Rx'; // tslint:disable-line
import { AuthService } from '../login/auth-service.service';
import { Observable } from 'rxjs/Rx';
import { Survey } from './survey.model';

@Injectable()
export class SurveyService {
  API = 'http://localhost:8080/surveys';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  // Return Observable that wraps array of Books
  getSurveys(headers: HttpHeaders): Observable<Survey[]> {
    return this.httpClient.get<Survey[]>(this.API, { headers: headers });
  }

  getPublicSurveys(headers: HttpHeaders): Observable<Survey[]> {
    return this.httpClient.get<Survey[]>(this.API + "/privacy/public", { headers: headers });
  }

  getUserSurveys(id: number): Observable<Survey[]>{
    return this.httpClient.get<Survey[]>(this.API + "/user/" + id, { headers: this.authService.getAuthHeaders()});
  }
}
