import { Component } from '@angular/core';
import { IUser } from '@src/app/core/models/user.model';
import { mockedUser } from '@src/app/core/mocks/user.mockup';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    company = 'merg';
    user: IUser = mockedUser;
    sizes = ComponentsSizesEnum;

    searchValue: string;

    constructor() {}

    handleSearchValue($event): void {
        this.searchValue = $event;
    }
}
