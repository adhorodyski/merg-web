import { Component } from '@angular/core';
import { slideUp } from 'src/app/shared/animations';

@Component({
    selector: 'app-explore',
    templateUrl: './explore.component.html',
    styleUrls: ['./explore.component.scss'],
    animations: [slideUp],
})
export class ExploreComponent {
    constructor() {}
}
