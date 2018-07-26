import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../survey.model';
import { SurveyService } from '../survey-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.css']
})
export class SurveyResultComponent implements OnInit {
@Input() survey: Survey;

  constructor() { }

  ngOnInit() {
  }

}
