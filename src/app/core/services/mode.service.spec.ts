import { TestBed } from '@angular/core/testing';

import { ModeService } from './mode.service';

describe('ModeService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ModeService = TestBed.inject(ModeService);
        expect(service).toBeTruthy();
    });
});
