import { Injectable } from '@angular/core';
import { LANGUAGES } from '@src/app/core/models/languages.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    private readonly defaultLanguage = LANGUAGES.ENGLISH;
    private readonly language: BehaviorSubject<LANGUAGES>;

    constructor() {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            this.language = new BehaviorSubject<LANGUAGES>(LANGUAGES[storedLanguage]);
        } else {
            this.language = new BehaviorSubject<LANGUAGES>(this.defaultLanguage);
            localStorage.setItem('language', this.defaultLanguage);
        }
        this.applyLanguage();
    }

    setLanguage(language: LANGUAGES): void {
        this.language.next(language);
        localStorage.setItem('language', LANGUAGES[language]);
        this.applyLanguage();
    }

    getLanguage(): Observable<LANGUAGES> {
        return this.language;
    }

    applyLanguage(): void {
        const root: HTMLHtmlElement = document.querySelector('html');
    }
}
