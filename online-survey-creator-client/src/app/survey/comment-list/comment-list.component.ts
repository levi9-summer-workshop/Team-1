import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../survey.model';
import { SurveyComment } from '../comments/survey-comment';
import { Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../login/auth-service.service';
import { SurveyUser } from '../../users/survey-user.model';
import { CommentsService } from '../comments/comments.service';

@Component({
  selector: 'survey-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() comment: SurveyComment;
  currentUser: SurveyUser;
  constructor(public authService: AuthService,public router: Router, public commentService: CommentsService) { }

  ngOnInit() {
    this.currentUser=this.authService.getSurveyUser();
  }

  onUserClicked(id: number) {
    this.router.navigate(['survey/user/'+id+'/surveys']);
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe();
    this.commentService.onCommentDeleted.next();
  }
}
