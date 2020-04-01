import { Component, Input } from '@angular/core';
import { IPost } from '@src/app/core/models/post.model';
import { SIZES } from '@src/app/core/models/sizes.enum';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent {
    @Input() post: IPost;
    @Input() size: SIZES;

    constructor() {}
}
