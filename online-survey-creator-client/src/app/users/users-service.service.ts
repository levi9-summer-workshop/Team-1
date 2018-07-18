import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService, User } from '../login/auth-service.service';
import { Observable } from '../../../node_modules/rxjs';
import { SurveyUser } from './survey-user';

@Injectable()
export class UsersService {
  API = 'http://localhost:8080/users';
  

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  // Return Observable that wraps array of Users
  getUsers(): Observable<SurveyUser[]> {
    return this.httpClient.get<SurveyUser[]>(this.API, { headers: this.authService.getAuthHeaders() });
  }

   // Delete user by usename and return Observable
   deleteUser(username: String) {
    return this.httpClient.delete(this.API + '/' + (username), { headers: this.authService.getAuthHeaders() });
  }
}

