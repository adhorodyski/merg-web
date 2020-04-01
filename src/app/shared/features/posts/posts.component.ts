import { Component, Input } from '@angular/core';
import { SIZES } from '@src/app/core/models/sizes.enum';
import { IPost } from '@src/app/core/models/post.model';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
    @Input() posts: IPost[];
    sizes = SIZES;

    constructor() {}

    isSmall(): boolean {
        return window.innerWidth < 1100;
    }
}
