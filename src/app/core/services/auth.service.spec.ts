import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule],
        }),
    );

    it('should be created', () => {
        const service: AuthService = TestBed.inject(AuthService);
        expect(service).toBeTruthy();
    });
});
