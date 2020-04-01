import { Injectable } from '@angular/core';
import { MODES } from '@src/app/core/models/modes.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModeService {
    private readonly defaultMode = MODES.LIGHT;
    private readonly mode: BehaviorSubject<MODES>;

    constructor() {
        const storedMode = localStorage.getItem('mode');
        if (storedMode) {
            this.mode = new BehaviorSubject<MODES>(MODES[storedMode]);
        } else {
            this.mode = new BehaviorSubject<MODES>(this.defaultMode);
            localStorage.setItem('mode', this.defaultMode);
        }
        this.applyMode();
    }

    setMode(mode: MODES): void {
        this.mode.next(mode);
        localStorage.setItem('mode', MODES[mode]);
        this.applyMode();
    }

    getMode(): Observable<MODES> {
        return this.mode;
    }

    applyMode(): void {
        const root: HTMLHtmlElement = document.querySelector('html');

        if (this.mode.getValue() === MODES.DARK) {
            root.classList.add('merg-dark-theme');
        } else {
            root.classList.remove('merg-dark-theme');
        }
    }
}
