import { Component, Input } from '@angular/core';
import { BUTTONS } from 'src/app/core/models/buttons.enum';
import { SIZES } from 'src/app/core/models/sizes.enum';
import { IUser } from 'src/app/core/models/user.model';

@Component({
    selector: 'app-profile-overview',
    templateUrl: './profile-overview.component.html',
    styleUrls: ['./profile-overview.component.scss'],
})
export class ProfileOverviewComponent {
    @Input() user: IUser;

    sizes = SIZES;
    mergeButtonType = BUTTONS.PRIMARY;

    constructor() {}
}
