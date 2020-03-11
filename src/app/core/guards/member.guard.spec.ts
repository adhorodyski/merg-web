import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { MemberGuard } from './member.guard';
import { AuthService } from '@src/app/core/services/auth.service';

describe('MemberGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [MemberGuard],
        });
    });

    it('should create an instance', inject(
        [MemberGuard, AuthService, Router],
        (authService: AuthService, router: Router) => {
            const guard = new MemberGuard(authService, router);
            expect(guard).toBeTruthy();
        },
    ));
});
