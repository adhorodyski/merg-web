import { Component, Input } from '@angular/core';
import { IUser } from '@src/app/core/models/user.model';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';
import { slideUp } from '@src/app/shared/animations/slideUp';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
    animations: [slideUp],
})
export class SearchResultComponent {
    @Input() user: IUser;
    @Input() size: ComponentsSizesEnum;

    constructor() {}
}
