import { Component, Input } from '@angular/core';
import { IUser } from '@src/app/core/models/user.model';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
    animations: [inOutAnimation],
})
export class SearchResultComponent {
    @Input() user: IUser;
    @Input() size: ComponentsSizesEnum;

    constructor() {}
}
