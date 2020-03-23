import { Component, Input } from '@angular/core';
import { IPost } from '@src/app/core/models/post.model';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent {
    @Input() post: IPost;
    @Input() size: ComponentsSizesEnum;

    constructor() {}
}
