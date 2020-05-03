import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BUTTONS } from 'src/app/core/models/buttons.enum';
import { FORM_CONTROLS } from 'src/app/core/models/form-controls.enum';
import { IUser } from 'src/app/core/models/user.model';

@Component({
    selector: 'app-settings-personal',
    templateUrl: './settings-personal.component.html',
    styleUrls: ['./settings-personal.component.scss'],
})
export class SettingsPersonalComponent implements OnInit {
    @Input() user: IUser;
    buttons = BUTTONS;
    formControls = FORM_CONTROLS;
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
