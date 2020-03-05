import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';
import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
    it('create an instance', inject([DomSanitizer], (sanitize: DomSanitizer) => {
        const pipe = new SafePipe(sanitize);
        expect(pipe).toBeTruthy();
    }));
});
