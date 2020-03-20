import { Injectable } from '@angular/core';
import { LanguagesEnum } from '@src/app/core/models/languages.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    private readonly defaultLanguage = LanguagesEnum.ENGLISH;
    private readonly language: BehaviorSubject<LanguagesEnum>;

    constructor() {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            this.language = new BehaviorSubject<LanguagesEnum>(LanguagesEnum[storedLanguage]);
        } else {
            this.language = new BehaviorSubject<LanguagesEnum>(this.defaultLanguage);
            localStorage.setItem('language', this.defaultLanguage);
        }
        this.applyLanguage();
    }

    setLanguage(language: LanguagesEnum): void {
        this.language.next(language);
        localStorage.setItem('language', LanguagesEnum[language]);
        this.applyLanguage();
    }

    getLanguage(): Observable<LanguagesEnum> {
        return this.language;
    }

    applyLanguage(): void {
        const root: HTMLHtmlElement = document.querySelector('html');
    }
}
