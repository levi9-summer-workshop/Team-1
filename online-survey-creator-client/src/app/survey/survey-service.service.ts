import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs'; // tslint:disable-line
import { AuthService } from '../login/auth-service.service';
import { Observable } from 'rxjs/RX';
import { Survey } from './survey.model';

@Injectable()
export class SurveyService {
  API = 'http://localhost:8080/surveys/';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  // Return Observable that wraps array of Books
  getSurveys(headers: HttpHeaders): Observable<Survey[]> {
    return this.httpClient.get<Survey[]>(this.API, { headers: headers });
  }

  getAllSurveys(): Observable<Survey[]> {
    return this.httpClient.get<Survey[]>(this.API, { headers:  this.authService.getAuthHeaders()});
  }

  getPublicSurveys(headers: HttpHeaders): Observable<Survey[]> {
    return this.httpClient.get<Survey[]>(this.API + 'privacy/public', { headers: headers });
  }

  getUserSurveys(id: number): Observable<Survey[]> {
    return this.httpClient.get<Survey[]>(this.API + 'user/' + id, { headers: this.authService.getAuthHeaders()});
  }

  deleteSurvey(id: number) {
    return this.httpClient.delete(this.API + id, { headers: this.authService.getAuthHeaders()});
  }

  closeSurvey(survey: Survey) {
    return this.httpClient.put(this.API, survey , { headers: this.authService.getAuthHeaders()});
  }

  getSurveyById(id: number): Observable<Survey> {
    return this.httpClient.get<Survey>(this.API + id, { headers: this.authService.getAuthHeaders()});
  }

  saveSurvey(survey: Survey) {
    return this.httpClient.post(this.API, survey, { headers: this.authService.getAuthHeaders()});
  }

  getSearchByDescriptionSurveys(searchTerm: string): Observable<Survey[]> {
    return this.httpClient.get<Survey[]>(this.API + "search/" + searchTerm, { headers: this.authService.getAuthHeaders()});
  }

  getSearchOpenedSurveysByDescription(searchTerm: string, headers: HttpHeaders): Observable<Survey[]> {
    return this.httpClient.get<Survey[]>(this.API + "search/" + searchTerm + "/public", { headers: headers});
  }

}
