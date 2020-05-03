import { Component, OnInit } from '@angular/core';
import { mockedUser } from 'src/app/core/mocks/user.mockup';
import { IPost } from 'src/app/core/models/post.model';
import { IUser } from 'src/app/core/models/user.model';
import { PostService } from 'src/app/core/services/post.service';
import { slideUp } from 'src/app/shared/animations/slideUp';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    animations: [slideUp],
})
export class ProfileComponent implements OnInit {
    user: IUser;
    river: IPost[];

    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.getUser();
        this.getRiver();
    }

    private getUser(): void {
        this.user = mockedUser;
    }

    private getRiver(): void {
        this.river = this.postService.getRiver();
    }
}
