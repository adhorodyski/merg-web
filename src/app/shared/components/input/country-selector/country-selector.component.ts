import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LANGUAGES } from 'src/app/core/models/languages.enum';

@Component({
    selector: 'app-country-selector',
    templateUrl: './country-selector.component.html',
    styleUrls: ['./country-selector.component.scss'],
})
export class CountrySelectorComponent {
    options = LANGUAGES;
    @Input() selectedLanguage: LANGUAGES;
    @Output() changeEvent: EventEmitter<LANGUAGES> = new EventEmitter<LANGUAGES>();

    constructor() {}

    sendValue($event): void {
        this.changeEvent.emit($event);
    }
}
