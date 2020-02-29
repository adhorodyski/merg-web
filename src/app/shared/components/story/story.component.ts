import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.scss'],
})
export class StoryComponent {
    @Input() size: string;
    @Input() provider: string;
    @Input() username: string;

    constructor() {}
}
