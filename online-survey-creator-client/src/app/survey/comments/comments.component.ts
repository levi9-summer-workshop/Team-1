import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../survey.model';
import { SurveyComment } from './survey-comment';

@Component({
  selector: 'survey-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comments: SurveyComment[];
  constructor() { }

  ngOnInit() {
  }

}
