import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Survey } from './survey.model';
import { Question } from '../question/question.model';
import { Answer } from '../answer/answer.model';

@Injectable()
export class CreateSurveyService {
  survey: Survey = new Survey(null, null, null, null, null, null, null);
  
  constructor() { }
   
  updateQuestions(questions: Question[]) {
    this.survey.surveyQuestions = questions;
  }

  updateAnswers(questionId: number, answers: Answer[]) {
    this.survey.surveyQuestions[questionId].surveyAnswers = answers;
  }

  getSurvey() {
    return this.survey;
  }

  updateSurvey(survey: Survey) {
    this.survey = survey;
  }

}
