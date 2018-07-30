import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './login/auth-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const expectedRole = route.data.expectedRole;

        if (this.authService.isAuthenticated()) {
            if ( expectedRole === 'user'  || (expectedRole === 'admin' && this.authService.hasRoleAdmin())) {
                return true;
            }
            this.router.navigate(['/home']);
            return false;

        }
        this.router.navigate(['/login']);
        return false;
    }

}