import { Component, Input } from '@angular/core';
import { AccountsEnum } from '@src/app/core/models/accounts.enum';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
    @Input() size: ComponentsSizesEnum;
    @Input() accountType: AccountsEnum;
    @Input() avatar: string;
    @Input() username: string;
    @Input() followers: string;

    constructor() {}
}
