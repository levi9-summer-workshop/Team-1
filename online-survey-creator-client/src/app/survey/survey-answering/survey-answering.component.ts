import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../survey.model';
import { SurveyService } from '../survey-service.service';
import { NgForm, FormControl, FormGroup } from '../../../../node_modules/@angular/forms';
import { Answer } from '../../answer/answer.model';
import { forEach } from '../../../../node_modules/@angular/router/src/utils/collection';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'survey-answering',
  templateUrl: './survey-answering.component.html',
  styleUrls: ['./survey-answering.component.css']
})
export class SurveyAnsweringComponent implements OnInit {
  
  currentSurvey: Survey;
  buttonType: string;
  selectedAnswers: number[] = [];
  surveyId: number;

  constructor(private surveyService: SurveyService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.surveyId = params['id']);
  }

  ngOnInit() {
    this.currentSurvey = new Survey (null, null, null, null, null, null, null);
    this.surveyService.getSurveyById(this.surveyId).subscribe(
      (survey) => { 
        this.currentSurvey = survey;
        console.log(this.currentSurvey);
      }
    );
  }


  // go through all answers in survey, check which ones are selected
  // chechbox returns true/false; radio returns answer.id
  // if selection value != null && "" && false => add it to the list of selectedAnswers and submit it to backend

  onSurveySubmit(form: NgForm) {
      console.log(form.value);
  }

}
