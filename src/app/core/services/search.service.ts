import { Injectable } from '@angular/core';
import { IUser } from 'src/app/core/models/user.model';
import { mockedUser } from 'src/app/core/mocks/user.mockup';
import { mockedTags } from 'src/app/core/mocks/tags.mockup';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    constructor() {}

    getTags(): string[] {
        return mockedTags;
    }

    searchByInput(input: string): IUser[] {
        return [mockedUser, mockedUser];
    }

    searchByTags(tags: string[]): IUser[] {
        return [mockedUser, mockedUser, mockedUser];
    }
}
