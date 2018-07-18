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

   // Delete user by id and return Observable
   deleteUser(userId: number) {
    return this.httpClient.delete(this.API + '/' + (userId), { headers: this.authService.getAuthHeaders() });
  }

  //Block user 
  blockUser(user: SurveyUser) {
    return this.httpClient.put(this.API + '/' + (user.id), { headers: this.authService.getAuthHeaders() });
  }
}

