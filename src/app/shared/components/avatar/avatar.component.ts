import { Component, Input } from '@angular/core';
import { AvatarSizesEnum } from '@src/app/core/models/avatar-sizes.enum';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
    @Input() source: string;
    @Input() username: string;
    @Input() size: AvatarSizesEnum;

    constructor() {}
}
