import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [ApiService],
            imports: [HttpClientModule],
        }),
    );

    it('should be created', () => {
        const service: ApiService = TestBed.get(ApiService);
        expect(service).toBeTruthy();
    });
});
