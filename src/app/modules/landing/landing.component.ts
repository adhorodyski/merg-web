import { Component } from '@angular/core';
import { BUTTONS } from 'src/app/core/models/buttons.enum';
import { slideUp } from 'src/app/shared/animations/slideUp';
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    animations: [slideUp],
})
export class LandingComponent {
    buttons = BUTTONS;
    appleStoreLink = 'https://apple.com';
    googlePlayLink = 'https://google.com';

    constructor() {}
}
