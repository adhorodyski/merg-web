import { Component, OnInit } from '@angular/core';
import { mockedUser } from '@src/app/core/mocks/user.mockup';
import { IUser } from '@src/app/core/models/user.model';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    animations: [inOutAnimation],
})
export class ProfileComponent implements OnInit {
    user: IUser = mockedUser;

    constructor() {}

    ngOnInit() {}
}
