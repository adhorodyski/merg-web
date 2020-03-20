import { Injectable } from '@angular/core';
import { ModesEnum } from '@src/app/core/models/modes.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModeService {
    private readonly defaultMode = ModesEnum.LIGHT;
    private readonly mode: BehaviorSubject<ModesEnum>;

    constructor() {
        const storedMode = localStorage.getItem('mode');
        if (storedMode) {
            this.mode = new BehaviorSubject<ModesEnum>(ModesEnum[storedMode]);
        } else {
            this.mode = new BehaviorSubject<ModesEnum>(this.defaultMode);
            localStorage.setItem('mode', this.defaultMode);
        }
        this.applyMode();
    }

    setMode(mode: ModesEnum): void {
        this.mode.next(mode);
        localStorage.setItem('mode', ModesEnum[mode]);
        this.applyMode();
    }

    getMode(): Observable<ModesEnum> {
        return this.mode;
    }

    applyMode(): void {
        const root: HTMLHtmlElement = document.querySelector('html');

        if (this.mode.getValue() === ModesEnum.DARK) {
            root.classList.add('merg-dark-theme');
        } else {
            root.classList.remove('merg-dark-theme');
        }
    }
}
