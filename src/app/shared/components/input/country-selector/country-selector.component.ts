import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LanguagesEnum } from '@src/app/core/models/languages.enum';

@Component({
    selector: 'app-country-selector',
    templateUrl: './country-selector.component.html',
    styleUrls: ['./country-selector.component.scss'],
})
export class CountrySelectorComponent {
    options = LanguagesEnum;
    @Input() selectedLanguage: LanguagesEnum;
    @Output() changeEvent: EventEmitter<LanguagesEnum> = new EventEmitter<LanguagesEnum>();

    constructor() {}

    sendValue($event): void {
        this.changeEvent.emit($event);
    }
}
