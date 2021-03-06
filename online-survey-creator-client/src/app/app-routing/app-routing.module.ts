import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth-guard.service';
import { UsersComponent } from '../users/users.component';
import { QuestionComponent } from '../question/question.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { SurveyComponent } from '../survey/survey.component';
import { AuthGuardAccessDeniedService } from '../auth-guard-access-denied.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { UsersSurveysComponent } from '../users-surveys/users-surveys.component';
import { SurveyWrapperComponent } from '../survey-survey-wrapper/survey-survey-wrapper.component';
import { SurveyAnsweringComponent } from '../survey/survey-answering/survey-answering.component';
import { SurveyListHomeComponent } from '../home/survey-list-home/survey-list-home.component';
import { UserSurveysComponent } from '../user-surveys/user-surveys.component';
import { AuthGuardUserBlockedService } from '../auth-guard-user-blocked.service';
import { ForgottenPasswordUsernameComponent } from '../forgotten-password-username/forgotten-password-username.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login/forgotten', component: ForgottenPasswordUsernameComponent},
  { path: 'admin', component: UsersComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin'}  },
  { path: 'newsurvey', component: SurveyComponent, canActivate: [AuthGuardUserBlockedService] , data: { expectedRole: 'user'} },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardAccessDeniedService] },
  { path: 'signup', component: SignUpComponent, canActivate: [AuthGuardAccessDeniedService] },
  { path: 'user', component: UsersSurveysComponent, canActivate: [AuthGuard], data: {expectedRole: 'user'} },
  { path: 'survey/:id/participate', component: SurveyAnsweringComponent, canActivate: [AuthGuardUserBlockedService], data: {expectedRole: 'user'} },
  { path: 'survey/:id/result', component: SurveyWrapperComponent, canActivate: [AuthGuard], data: { expectedRole: 'user'}  },
  { path: 'survey/:id/result/admin', component: SurveyWrapperComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin'}  },
  { path: 'survey/user/:id/surveys', component: UserSurveysComponent, canActivate: [AuthGuard], data: { expectedRole: 'user'}  },
  

  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
