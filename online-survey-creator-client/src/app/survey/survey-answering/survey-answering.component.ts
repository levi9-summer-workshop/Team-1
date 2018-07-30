import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Survey
} from '../survey.model';
import {
  SurveyService
} from '../survey-service.service';
import {
  NgForm,
  FormControl,
  FormGroup
} from '../../../../node_modules/@angular/forms';
import {
  Answer
} from '../../answer/answer.model';
import {
  forEach
} from '../../../../node_modules/@angular/router/src/utils/collection';
import {
  ActivatedRoute
} from '../../../../node_modules/@angular/router';

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
    this.route.params.subscribe(params => this.surveyId = params['id']);
  }

  ngOnInit() {
    this.currentSurvey = new Survey(null, null, null, null, null, null, null);
    this.surveyService.getSurveyById(this.surveyId).subscribe(
      (survey) => {
        this.currentSurvey = survey;
        this.currentSurvey.surveyQuestions.forEach(q => q.surveyAnswers.forEach(a => console.log(a.id)));
      }
    );
  }


  // go through all answers in survey, check which ones are selected
  // chechbox returns true/false; radio returns answer.id
  // if selection value != null && "" && false => add it to the list of selectedAnswers and submit it to backend

  onSurveySubmit(form: NgForm) {

    let answersWithIds: number[] = [];

    //add all id of 'SINGLE_ANSWER' selected answers to array answersWithIds
    this.currentSurvey.surveyQuestions
      .filter(question => question.questionType === 'SINGLE_ANSWER') //filter only 'SINGLE_ANSWER' questions
      .forEach(question => {
        let id = question.id.toString(); 
        answersWithIds.push(form.controls[id].value); // add value to array
    });

    //add all id of 'MULTIPLE_ANSWERS' selected answers to array answersWithIds
    this.currentSurvey.surveyQuestions
      .filter(question => question.questionType === 'MULTIPLE_ANSWERS') //filter only 'MULTIPLE_ANSWERS' questions
      .forEach(question => question.surveyAnswers
        .forEach(answer => {                                    
          let id = answer.id.toString();
          if (form.controls[id].value === true) {    //filter answers that are selected (true)
            answersWithIds.push(answer.id);          // add id to array
          }
        }));
        let result = [];
        answersWithIds.sort().forEach(qId => result.push(qId));
    console.log('Ids of answers: [' + result + ']');

  }

}
