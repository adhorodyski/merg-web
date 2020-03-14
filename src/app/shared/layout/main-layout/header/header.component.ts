import { Component } from '@angular/core';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    company = 'merg';

    searchValue: string;
    searchSize = ComponentsSizesEnum.SMALL;

    avatarUsername = 'myusername';
    avatarSize = ComponentsSizesEnum.SMALL;
    avatarSource = 'https://fredericksburg.today/wp-content/uploads/2020/02/jayden-1024x862.jpg';

    constructor() {}

    handleSearchValue($event): void {
        this.searchValue = $event;
    }
}
