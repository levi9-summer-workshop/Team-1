import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from '../../survey/survey.model';
import { AuthService } from '../../login/auth-service.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'survey-survey-list-home',
  templateUrl: './survey-list-home.component.html',
  styleUrls: ['./survey-list-home.component.css']
})
export class SurveyListHomeComponent implements OnInit {
  @Input() survey: Survey;
  
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  redirect(redirectPath: string) {
    if(this.authService.isAuthenticated() ) {
      
  } else {
    this.router.navigate([redirectPath]);
  }
}

}
