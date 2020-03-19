import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';
import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
    let pipe: SafePipe;

    beforeEach(inject([DomSanitizer], (sanitize: DomSanitizer) => {
        pipe = new SafePipe(sanitize);
    }));

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });
});
