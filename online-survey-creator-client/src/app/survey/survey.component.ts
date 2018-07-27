import { Component, OnInit } from '@angular/core';
import { Survey } from './survey.model';
import { SurveyService } from './survey-service.service';
import { Question } from '../question/question.model';
import { Answer } from '../answer/answer.model';
import { AuthService } from '../login/auth-service.service';
import { SurveyStatus } from './survey-status';
import { SurveyPrivacy } from './survey-privacy';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'survey-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  questions: Question[] = [];
  answers: Answer[] = [];
  questionText = '';
  answerValue = '';
  surveyDescription = '';
  surveyDueDate = new Date();
  privacyType = 'PUBLIC';
  questionType = 'SINGLE_ANSWER';

  constructor(private authService: AuthService, private surveyService: SurveyService, private router: Router) {}

  ngOnInit() {}

 addAnswer(answerValue: string) {
    const answer = new Answer(null, answerValue);
    this.answers.push(answer);
    this.answerValue = '';
  }

  addQuestion(questionText: string) {
    const question = new Question(null, questionText, [], this.questionType);
    question.surveyAnswers = this.answers;
    this.questions.push(question);
    this.questionText = '';
    this.answers = [];
  }

  deleteQuestion(id: number) {
    this.questions.splice(id, 1);
  }

  deleteAnswer(id: number) {
    this.answers.splice(id, 1);
  }

  submitSurvey() {
    let privacyId: number;
    if (this.privacyType === 'PUBLIC') {
      privacyId = 1;
    } else {
      privacyId = 2;
    }
    const user = this.authService.getSurveyUser();
    const survey =
    new
    Survey(this.surveyDescription,user, this.questions, this.surveyDueDate, new SurveyPrivacy(this.privacyType, privacyId), new SurveyStatus('OPEN', 1), null);
    this.surveyService.saveSurvey(survey).subscribe(data => this.router.navigate(['user']));
  }

}
