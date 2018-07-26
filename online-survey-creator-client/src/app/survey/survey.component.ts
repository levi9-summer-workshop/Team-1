import { Component, OnInit } from '@angular/core';
import { Survey } from './survey.model';
import { SurveyService } from './survey-service.service';
import { CreateSurveyService } from './create-survey.service';
import { Question } from '../question/question.model';
import { Answer } from '../answer/answer.model';

@Component({
  selector: 'survey-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  questions: Question[] = [];
  answers: Answer[] = [];
  questionText: string = "";
  answerValue: string = "";

  constructor() {
    
   }

  ngOnInit() {

  }

  addAnswer(answerValue: string) {
    let answer = new Answer(null, answerValue);
    this.answers.push(answer);
  }

  addQuestion(questionText: string) {
    let question = new Question(null, questionText);
    question.surveyAnswers = this.answers;
    this.questions.push(question);
  }

  deleteQuestion(id: number) {
    this.questions.splice(id,1);
  }
  
  deleteAnswer(id: number) {
    this.answers.splice(id,1);
  }

}
