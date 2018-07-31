import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../survey.model';
import { SurveyComment } from '../comments/survey-comment';

@Component({
  selector: 'survey-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() comment: SurveyComment;
  constructor() { }

  ngOnInit() {
  }

}
