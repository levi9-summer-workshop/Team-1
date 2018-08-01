import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../login/auth-service.service';
import { CommentsService } from '../comments.service';
import { SurveyUser } from '../../../users/survey-user.model';
import { Router } from '../../../../../node_modules/@angular/router';
import { SurveyComment } from '../survey-comment';
import { Observable } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'survey-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() comment: SurveyComment;
  currentUser: SurveyUser;
  comments$: Observable<SurveyComment[]>;

  constructor(public authService: AuthService,public router: Router, public commentService: CommentsService) { }

  ngOnInit() {
    this.currentUser=this.authService.getSurveyUser();
    this.comments$ = this.commentService.getAllComments();
  }

  onUserClicked(id: number) {
    this.router.navigate(['survey/user/'+id+'/surveys']);
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe(
      () => {
          this.comments$ = this.commentService.getAllComments();
          this.commentService.onCommentDeleted.next();
      });
    
  }
}
