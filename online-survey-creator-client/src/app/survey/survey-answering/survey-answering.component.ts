import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../survey.model';
import { SurveyService } from '../survey-service.service';
import { NgForm, FormControl, FormGroup } from '../../../../node_modules/@angular/forms';
@Component({
  selector: 'survey-answering',
  templateUrl: './survey-answering.component.html',
  styleUrls: ['./survey-answering.component.css']
})
export class SurveyAnsweringComponent implements OnInit {

  currentSurvey: Survey;
  buttonType: string;
  selectedAnswer: boolean;

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.currentSurvey = new Survey (null, null, null, null, null, null, null);
    this.surveyService.getSurveyById(1).subscribe(
      (survey) => this.currentSurvey = survey
    );
  }

  // onSurveySubmit(form: NgForm) {
  //   console.log(form.value);
  // }

}
