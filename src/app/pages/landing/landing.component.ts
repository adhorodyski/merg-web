import { Component } from '@angular/core';
import { ButtonTypesEnum } from '@src/app/core/models/button-types.enum';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    animations: [inOutAnimation],
})
export class LandingComponent {
    signInButtonType = ButtonTypesEnum.SECONDARY;
    appleStoreLink = 'https://apple.com';
    googlePlayLink = 'https://google.com';

    constructor() {}
}
