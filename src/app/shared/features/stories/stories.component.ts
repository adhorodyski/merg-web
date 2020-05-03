import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { IPost } from 'src/app/core/models/post.model';
import { SIZES } from 'src/app/core/models/sizes.enum';

@Component({
    selector: 'app-stories',
    templateUrl: './stories.component.html',
    styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
    stories: IPost[];

    sizes = SIZES;

    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.stories = this.postService.getStories();
    }
}
