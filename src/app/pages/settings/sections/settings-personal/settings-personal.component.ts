import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonTypesEnum } from '@src/app/core/models/button-types.enum';
import { FormControlsEnum } from '@src/app/core/models/form-controls.enum';
import { IUser } from '@src/app/core/models/user.model';

@Component({
    selector: 'app-settings-personal',
    templateUrl: './settings-personal.component.html',
    styleUrls: ['./settings-personal.component.scss'],
})
export class SettingsPersonalComponent implements OnInit {
    @Input() user: IUser;
    avatarControl = FormControlsEnum.AVATAR;
    usernameControl = FormControlsEnum.USERNAME;
    nameControl = FormControlsEnum.NAME;
    emailControl = FormControlsEnum.EMAIL;
    updateButtonType = ButtonTypesEnum.SECONDARY;
    loggedUserForm: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.loggedUserForm = new FormGroup({
            username: new FormControl(this.user.username, [Validators.required]),
            name: new FormControl(this.user.name, [Validators.required]),
            email: new FormControl(this.user.email, [Validators.required, Validators.email]),
        });
    }

    submit(): void {
        console.log(this.loggedUserForm.value);
    }
}
