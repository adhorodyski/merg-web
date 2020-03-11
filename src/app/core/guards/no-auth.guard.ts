import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
    }
}
