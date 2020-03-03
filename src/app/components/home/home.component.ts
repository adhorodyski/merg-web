import { Component, OnInit } from '@angular/core';
import { ModesEnum } from '@src/app/core/models/modes.enum';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    title = 'merg-app';
    activeMode = ModesEnum.LIGHT;
    mode = ModesEnum.LIGHT;
    mode2 = ModesEnum.DARK;
    title1 = 'Light Mode';
    title2 = 'Dark Mode';

    constructor() {}

    ngOnInit() {}

    setActiveMode(mode: ModesEnum): void {
        this.activeMode = ModesEnum[ModesEnum[mode]];
    }
}
