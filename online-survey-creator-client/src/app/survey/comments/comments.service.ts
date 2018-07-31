import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { AuthService } from '../../login/auth-service.service';
import { SurveyComment } from './survey-comment';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class CommentsService {
  
  API = 'http://localhost:8080/comments/';


  constructor(private httpClient: HttpClient, private authService: AuthService) {

   }

   getAllComments(): Observable<SurveyComment[]>{
     return this.httpClient.get<SurveyComment[]>(this.API, {headers: this.authService.getAuthHeaders()});
   }

   saveComment(comment: SurveyComment){
     return this.httpClient.post(this.API, comment, {headers: this.authService.getAuthHeaders()});
   }

   getAllCommentsBySurveyId(id: number){
     return this.httpClient.get<SurveyComment[]>(this.API + id, {headers: this.authService.getAuthHeaders()});
   }

}
