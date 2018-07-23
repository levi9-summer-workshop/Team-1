import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/Rx'; // tslint:disable-line
import { SurveyUser } from '../users/survey-user.model';
import { UsersService } from '../users/users-service.service';
import { Observable } from 'rxjs/Rx';

export interface User {
  username: string;
  roles: string[];
}

@Injectable()
export class AuthService {
  user: User;
  currentUser: SurveyUser;
  private authenticated = false;
  private headers;

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    const base64Credential = btoa(username + ':' + password);
    const headers = new HttpHeaders({
      authorization: 'Basic ' + base64Credential
    });
    return this.httpClient
      .get<User>('http://localhost:8080/users/user', { headers: headers })
      .do(user => {
        this.user = user;
        this.headers = headers;
        this.authenticated = true;
        this.getCurrentUser(this.user.username).subscribe(
          currentUser => this.currentUser = currentUser
        );
      });
  }

  getAuthHeaders() {
    return this.headers;
  }

  getUsername() {
    if (this.user) {
      return this.user.username;
    }
  }

  isAuthenticated() {
    return this.authenticated;
  }

  hasRoleAdmin() {
    if (this.user) {
      return this.user.roles.includes('ROLE_ADMIN');
    }
  }

  logout() {
    this.authenticated = false;
    this.user = null;
    this.headers = null;
    this.router.navigate(['/login']);
    this.currentUser = null;
  }

  getCurrentUser(username: string) {
    return this.httpClient
      .get<SurveyUser>('http://localhost:8080/users/username/' + username, { headers: this.getAuthHeaders() });     
  }

  getSurveyUser() {
    return this.currentUser;
  }

}