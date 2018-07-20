import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth-service.service';
import { SurveyUser } from '../users/survey-user.model';

@Component({
  selector: 'survey-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // surveyUser: SurveyUser;
  // currentUser: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  
    }

}
