import { Component } from '@angular/core';
import { ButtonTypesEnum } from '@src/app/core/models/button-types.enum';
import { slideUp } from '@src/app/shared/animations/slideUp';
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    animations: [slideUp],
})
export class LandingComponent {
    signInButtonType = ButtonTypesEnum.SECONDARY;
    appleStoreLink = 'https://apple.com';
    googlePlayLink = 'https://google.com';

    constructor() {}
}
