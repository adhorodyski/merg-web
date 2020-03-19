import { Component } from '@angular/core';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    animations: [inOutAnimation],
})
export class SettingsComponent {
    constructor() {}
}
