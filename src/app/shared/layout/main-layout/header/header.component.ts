import { Component } from '@angular/core';
import { IUser } from '@src/app/core/models/user.model';
import { mockedUser } from '@src/app/core/mocks/user.mockup';
import { SIZES } from '@src/app/core/models/sizes.enum';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    company = 'merg';
    user: IUser = mockedUser;
    sizes = SIZES;

    searchValue: string;

    constructor() {}

    handleSearchValue($event): void {
        this.searchValue = $event;
    }
}
