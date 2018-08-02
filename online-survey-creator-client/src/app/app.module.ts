import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth-service.service';
import { AuthGuard } from './auth-guard.service';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users-service.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SurveyListHomeComponent } from './home/survey-list-home/survey-list-home.component';
import { SurveyComponent } from './survey/survey.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { AuthGuardAccessDeniedService } from './auth-guard-access-denied.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SurveyService } from './survey/survey-service.service';
import { UsersSurveysComponent } from './users-surveys/users-surveys.component';
import { SurveyAnsweringComponent } from './survey/survey-answering/survey-answering.component';
import { EmailService } from './email-service.service';
import { SurveyResultComponent } from './survey/survey-result/survey-result.component';
import { QuestionResultComponent } from './survey/question-result/question-result.component';
import { AnswerResultComponent } from './survey/answer-result/answer-result.component';
import { SurveyWrapperComponent } from './survey-survey-wrapper/survey-survey-wrapper.component';
import { CreateSurveyService } from './survey/create-survey.service';
import { SurveyAnsweringService } from './survey/survey-answering/survey-answering.service';
import { UserSurveysComponent } from './user-surveys/user-surveys.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CommentListComponent } from './survey/comments/comment-list/comment-list.component';
import { CommentsComponent } from './survey/comments/comments.component';
import { AuthGuardUserBlockedService } from './auth-guard-user-blocked.service';
import { CommentsService } from './survey/comments/comments.service';
import { ForgottenPasswordUsernameComponent } from './forgotten-password-username/forgotten-password-username.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    UsersComponent,
    SignUpComponent,
    SurveyListHomeComponent,
    SurveyComponent,
    QuestionComponent,
    AnswerComponent,
    PageNotFoundComponent,
    UsersSurveysComponent,
    SurveyAnsweringComponent,
    SurveyResultComponent,
    QuestionResultComponent,
    AnswerResultComponent,
    SurveyWrapperComponent,
    UserSurveysComponent,
    AlertsComponent,
    CommentListComponent,
    CommentsComponent,
    ForgottenPasswordUsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthGuardAccessDeniedService,
    AuthGuardUserBlockedService,
    UsersService,
    SurveyService,
    EmailService,
    CreateSurveyService,
    SurveyAnsweringService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
