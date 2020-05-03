import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';
import { slideUp } from 'src/app/shared/animations/slideUp';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [slideUp],
})
export class DashboardComponent implements OnInit {
    ocean: IPost[];

    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.getOcean();
    }

    private getOcean(): void {
        this.ocean = this.postService.getOcean();
    }
}
