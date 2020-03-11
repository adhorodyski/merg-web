import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CreatorGuard } from './creator.guard';

describe('CreatorGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [CreatorGuard],
        });
    });

    it('should create an instance', inject([CreatorGuard], (guard: CreatorGuard) => {
        expect(guard).toBeTruthy();
    }));
});
