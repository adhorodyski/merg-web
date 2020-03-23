import { Component, Input } from '@angular/core';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';
import { IPost } from '@src/app/core/models/post.model';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
    @Input() posts: IPost[];
    sizes = ComponentsSizesEnum;

    constructor() {}

    isSmall(): boolean {
        return window.innerWidth < 1100;
    }
}
