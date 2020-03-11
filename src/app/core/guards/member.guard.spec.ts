import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MemberGuard } from './member.guard';

describe('MemberGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [MemberGuard],
        });
    });

    it('should create an instance', inject([MemberGuard], (guard: MemberGuard) => {
        expect(guard).toBeTruthy();
    }));
});
