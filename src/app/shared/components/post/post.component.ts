import { Component, Input } from '@angular/core';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent {
    @Input() username: string;
    @Input() avatar: string;
    @Input() provider: ProvidersEnum;
    @Input() size: ComponentsSizesEnum;
    @Input() timestamp: string;
    @Input() source: string;
    @Input() embed: string;

    constructor() {}
}
