import { Component, OnInit } from '@angular/core';
import { LANGUAGES } from '@src/app/core/models/languages.enum';
import { MODES } from '@src/app/core/models/modes.enum';
import { LanguageService } from '@src/app/core/services/language.service';
import { ModeService } from '@src/app/core/services/mode.service';

@Component({
    selector: 'app-settings-general',
    templateUrl: './settings-general.component.html',
    styleUrls: ['./settings-general.component.scss'],
})
export class SettingsGeneralComponent implements OnInit {
    modes = MODES;
    mode: MODES;
    language: LANGUAGES;

    constructor(private modeService: ModeService, private languageService: LanguageService) {}

    ngOnInit(): void {
        this.modeService.getMode().subscribe(mode => (this.mode = mode));
        this.languageService.getLanguage().subscribe(language => (this.language = language));
    }

    setMode($event): void {
        this.modeService.setMode($event);
    }

    setLanguage($event): void {
        this.languageService.setLanguage($event);
    }
}
