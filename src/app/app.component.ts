import { Component } from '@angular/core';
import { BUTTONS } from 'src/app/core/models/buttons.enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    buttons = BUTTONS;
}
