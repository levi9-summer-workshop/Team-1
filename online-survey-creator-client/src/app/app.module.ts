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
    AnswerComponent
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
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
