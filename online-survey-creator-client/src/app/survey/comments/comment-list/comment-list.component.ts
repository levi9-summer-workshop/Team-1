import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { SurveyComment } from '../survey-comment';
import { Survey } from '../../survey.model';

@Component({
  selector: 'survey-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() comment: SurveyComment;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUserClicked(id: number) {
    this.router.navigate(['survey/user/'+id+'/surveys']);
  }

}
