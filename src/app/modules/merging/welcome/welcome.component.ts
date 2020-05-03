import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BUTTONS } from 'src/app/core/models/buttons.enum';
import { slideUp } from 'src/app/shared/animations/slideUp';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    animations: [slideUp],
})
export class WelcomeComponent {
    buttons = BUTTONS;

    constructor(private router: Router) {}

    submit(): void {
        this.router.navigate(['/']);
    }
}
