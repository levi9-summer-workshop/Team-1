import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '../../node_modules/@angular/router';
import { AuthService } from './login/auth-service.service';

@Injectable()
export class AuthGuardUserBlockedService implements CanActivate {

  constructor( private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const expectedRole = route.data.expectedRole;

    if (this.authService.isAuthenticated() && expectedRole === 'user' && this.authService.getSurveyUser().blocked) {
      this.router.navigate(['home']);
      return false;
    }
    else if (this.authService.isAuthenticated() === false) {
      this.router.navigate(['login']);
      return false;
    }
    else {
      return true;
    }
  }

}
