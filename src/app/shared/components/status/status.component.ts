import { Component, Input, NgIterable } from '@angular/core';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
    @Input() steps: Array<number>;
    @Input() activeStepIDX: number;

    constructor() {}
}
