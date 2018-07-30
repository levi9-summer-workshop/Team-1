import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from '../../survey/survey.model';
import { AuthService } from '../../login/auth-service.service';
import { Router } from '@angular/router';
import { UsersService } from '../../users/users-service.service';
import { SurveyUser } from '../../users/survey-user.model';

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

  onResultClick(id: number) {
    this.router.navigate(['survey/'+id+'/result']);
  }

  onParticipateClick(id: number) {
    this.router.navigate(['survey/'+id+'/participate']);
  }

  onUserClicked(id: number) {
    this.router.navigate(['survey/user/'+id+'/surveys']);
  }

}
