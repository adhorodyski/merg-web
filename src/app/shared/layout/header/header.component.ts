import { Component } from '@angular/core';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    company = 'merg';

    searchType = 'search';
    searchValue: string;
    searchSize = ComponentsSizesEnum.SMALL;

    avatarUsername = 'myusername';
    avatarSize = ComponentsSizesEnum.SMALL;
    avatarSource = 'https://bit.ly/2PWiguP';

    constructor() {}

    handleSearchValue($event): void {
        this.searchValue = $event;
    }
}
