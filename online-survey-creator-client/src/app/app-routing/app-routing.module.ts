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


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: UsersComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin'}  },
  { path: 'newsurvey', component: SurveyComponent /*, canActivate: [AuthGuard]*/ },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent, canActivate: [AuthGuardAccessDeniedService] },
  { path: 'user', component: UsersSurveysComponent },
  { path: 'surveyresult', component: SurveyWrapperComponent, canActivate: [AuthGuard], data: { expectedRole: 'user'}  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
