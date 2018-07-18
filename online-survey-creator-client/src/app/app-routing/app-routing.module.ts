import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth-guard.service';
import { UsersComponent } from '../users/users.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { expectedRole: 'user'} },
  { path: 'user', component: UsersComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin'}  },
  //{ path: 'books', component: BooksComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin'}  },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
