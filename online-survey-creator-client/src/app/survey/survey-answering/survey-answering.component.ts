import {
  Component,
  OnInit,
  Input,
  OnDestroy
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
  ActivatedRoute, Router
} from '../../../../node_modules/@angular/router';
import { SurveyAnsweringService } from './survey-answering.service';
import { SurveyComment } from '../comments/survey-comment';
import { CommentsService } from '../comments/comments.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'survey-answering',
  templateUrl: './survey-answering.component.html',
  styleUrls: ['./survey-answering.component.css']
})
export class SurveyAnsweringComponent implements OnInit, OnDestroy {
  comments: SurveyComment[];
  currentSurvey: Survey;
  buttonType: string;
  selectedAnswers: number[] = [];
  surveyId: number;
  deleteCommentSubscription: Subscription;
  selectedCheckboxAnswers: string[] = null;
  message = {
    bootstrapClassAlert: 'alert-success',
    text: 'Thank you for participating in our survey',
    animateIn:'',
    animateOut:'',
    visibility: 'hidden',
    footerMessage: 'redirecting to home page.'
  };


  constructor(private surveyService: SurveyService, private router: Router, private route: ActivatedRoute, private surveyAnsweringService: SurveyAnsweringService, private commentsService: CommentsService) {
    this.route.params.subscribe(params => this.surveyId = params['id']);
  }

  ngOnInit() {
    this.currentSurvey = new Survey(null, null, null, null, null, null, null);
    this.surveyService.getSurveyById(this.surveyId).subscribe(
      (survey) => {
        this.currentSurvey = survey;
        this.commentsService.getAllCommentsBySurveyId(this.currentSurvey.id).subscribe(data => this.comments = data);
      }
    );
    this.deleteCommentSubscription = this.commentsService.onCommentDeleted.subscribe(
      () => this.commentsService.getAllCommentsBySurveyId(this.currentSurvey.id).subscribe(data => this.comments = data)
    );
  }

  ngOnDestroy(): void {
    this.deleteCommentSubscription.unsubscribe();
  }

  ifExpiryDateExists() {
    if (this.currentSurvey.surveyExpireDate === null) {
      return;
    } else {
      return 'open until: ' + this.currentSurvey.surveyExpireDate;
    }
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
    // console.log('Ids of answers: [' + result + ']');
    
    this.surveyAnsweringService.submitAnswers(result).subscribe(
      any => {
        this.message.animateIn = 'fadeIn'
        this.message.visibility = 'visible';
        setTimeout(() => {
          this.router.navigate(["/home"]);
        }, 2000)
      });
    
  }

  onSavedComment() {
    this.commentsService.getAllCommentsBySurveyId(this.currentSurvey.id).subscribe(data => this.comments = data);
  }

  onCheck(form: NgForm) {    
    this.currentSurvey.surveyQuestions
      .filter(question => question.questionType === 'MULTIPLE_ANSWERS') //filter only 'MULTIPLE_ANSWERS' questions
      .forEach(question => {
        this.selectedCheckboxAnswers = [];         
        question.surveyAnswers
        .forEach(answer => {    
          let id = answer.id.toString();
          if (form.controls[id].value === true) {                                 //filter answers that are selected (true)
            this.selectedCheckboxAnswers.push('true');                            // add value to array
          } else {
            this.selectedCheckboxAnswers.push('false');
            let index = this.selectedCheckboxAnswers.indexOf('false');
          }
        })});
  }

  isCheckboxSelected() {
    if (this.selectedCheckboxAnswers != null && this.selectedCheckboxAnswers.length > 0 && this.selectedCheckboxAnswers.indexOf('true') > -1) {      
      return true;
    }
    else if (this.selectedCheckboxAnswers  === null) {
      return true;
    }

  }

  // ifNoCheckboxes() {
  //   if (this.selectedCheckboxAnswers.length === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}
