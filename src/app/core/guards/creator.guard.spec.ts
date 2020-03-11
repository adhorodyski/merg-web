import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CreatorGuard } from './creator.guard';
import { AuthService } from '@src/app/core/services/auth.service';

describe('CreatorGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [CreatorGuard],
        });
    });

    it('should create an instance', inject(
        [CreatorGuard, AuthService, Router],
        (authService: AuthService, router: Router) => {
            const guard = new CreatorGuard(authService, router);
            expect(guard).toBeTruthy();
        },
    ));
});
