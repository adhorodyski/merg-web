import { Component } from '@angular/core';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';

@Component({
    selector: 'app-explore',
    templateUrl: './explore.component.html',
    styleUrls: ['./explore.component.scss'],
    animations: [inOutAnimation],
})
export class ExploreComponent {
    constructor() {}
}
