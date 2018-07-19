import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth-guard.service';
import { UsersComponent } from '../users/users.component';
import { QuestionComponent } from '../question/question.component';
import { SignUpComponent } from '../sign-up/sign-up.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: UsersComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin'}  },
  { path: 'newsurvey', component: QuestionComponent /*, canActivate: [AuthGuard]*/ },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
