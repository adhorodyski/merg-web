import { Component, Input } from '@angular/core';
import { ButtonTypesEnum } from '@src/app/core/models/button-types.enum';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';
import { IUser } from '@src/app/core/models/user.model';

@Component({
    selector: 'app-profile-overview',
    templateUrl: './profile-overview.component.html',
    styleUrls: ['./profile-overview.component.scss'],
})
export class ProfileOverviewComponent {
    @Input() user: IUser;

    sizes = ComponentsSizesEnum;
    mergeButtonType = ButtonTypesEnum.PRIMARY;

    constructor() {}
}
