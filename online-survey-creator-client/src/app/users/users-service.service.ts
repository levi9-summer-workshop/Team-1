import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService, User } from '../login/auth-service.service';
import { Observable } from 'rxjs';
import { SurveyUser } from './survey-user.model';

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

  // Block user 
  blockUser(user: SurveyUser) {
    return this.httpClient.put(this.API + '/', { headers: this.authService.getAuthHeaders() });
  }

  // Save user
  saveUser(user: SurveyUser): Observable<any> {
    if (user.id) {
      return this.httpClient.put(this.API, user, { headers: this.authService.getAuthHeaders() });
  } else {
      return  this.httpClient.post(this.API, user, { headers: this.authService.getAuthHeaders() });
  }
  }

registerUser(user: SurveyUser, headers: HttpHeaders) {
  return this.httpClient.post(this.API, user, {headers});
}

}

