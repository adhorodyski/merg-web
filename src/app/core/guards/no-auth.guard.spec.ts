import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NoAuthGuard } from './no-auth.guard';

describe('NoAuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [NoAuthGuard],
        });
    });

    it('should create an instance', inject([NoAuthGuard], (guard: NoAuthGuard) => {
        expect(guard).toBeTruthy();
    }));
});
