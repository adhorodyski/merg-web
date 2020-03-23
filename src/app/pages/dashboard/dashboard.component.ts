import { Component, OnInit } from '@angular/core';
import { IPost } from '@src/app/core/models/post.model';
import { PostService } from '@src/app/core/services/post.service';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [inOutAnimation],
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
