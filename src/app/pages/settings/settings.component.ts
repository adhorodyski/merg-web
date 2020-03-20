import { Component } from '@angular/core';
import { mockedUser } from '@src/app/core/mocks/user.mockup';
import { IUser } from '@src/app/core/models/user.model';
import { AuthService } from '@src/app/core/services/auth.service';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    animations: [inOutAnimation],
})
export class SettingsComponent {
    user: IUser = mockedUser;

    constructor(private authService: AuthService) {}

    isCreator() {
        return this.authService.isCreator();
    }
}
