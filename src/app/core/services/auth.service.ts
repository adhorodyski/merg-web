import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private authenticated = true;
    private creator = true;

    constructor(private router: Router) {}

    public isAuthenticated(): boolean {
        return this.authenticated;
    }

    public isCreator(): boolean {
        return this.creator;
    }

    public signOut(): void {
        this.authenticated = false;
        this.router.navigate(['landing']);
    }
}
