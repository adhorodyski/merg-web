import { Component } from '@angular/core';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [inOutAnimation],
})
export class DashboardComponent {
    constructor() {}
}
