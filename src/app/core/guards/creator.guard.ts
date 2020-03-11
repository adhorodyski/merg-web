import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '@src/app/core/services/auth.service';

@Injectable()
export class CreatorGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.authService.isCreator()) {
            this.router.navigate(['landing']);
            return false;
        }
        return true;
    }
}
