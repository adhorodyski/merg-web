import { Injectable } from '@angular/core';
import { mockedOcean } from '@src/app/core/mocks/ocean.mockup';
import { mockedRiver } from '@src/app/core/mocks/river.mockup';
import { mockedStories } from '@src/app/core/mocks/stories.mockup';
import { IPost } from '@src/app/core/models/post.model';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor() {}

    getOcean(): IPost[] {
        return mockedOcean;
    }

    getRiver(): IPost[] {
        return mockedRiver;
    }

    getStories(): IPost[] {
        return mockedStories;
    }
}
