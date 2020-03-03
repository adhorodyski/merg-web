import { Component, Input } from '@angular/core';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
    @Input() source: string;
    @Input() username: string;
    @Input() size: ComponentsSizesEnum;

    constructor() {}
}
