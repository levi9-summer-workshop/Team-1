import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../survey.model';
import { SurveyComment } from './survey-comment';
import { CommentsService } from './comments.service';
import { AuthService } from '../../login/auth-service.service';

@Component({
  selector: 'survey-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comments: SurveyComment[];
  @Input() currentSurvey: Survey;
  message: string;

  constructor(private commentsService: CommentsService, private authService: AuthService) { }

  ngOnInit() {
  }

  saveComment() {
    const currentUser = this.authService.getSurveyUser();
    const comment = new SurveyComment(this.message, currentUser, this.currentSurvey,new Date(), null);
    this.commentsService.saveComment(comment).subscribe();
  }
}
