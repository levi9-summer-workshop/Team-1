import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../survey.model';
import { SurveyComment } from '../comments/survey-comment';
import { Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../login/auth-service.service';

@Component({
  selector: 'survey-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() comment: SurveyComment;
  constructor(public authService: AuthService,public router: Router) { }

  ngOnInit() {
  }

  onUserClicked(id: number) {
    this.router.navigate(['survey/user/'+id+'/surveys']);
  }
}
