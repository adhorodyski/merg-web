import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonTypesEnum } from '@src/app/core/models/button-types.enum';
import { FormControlsEnum } from '@src/app/core/models/form-controls.enum';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SignInComponent implements OnInit {
    emailControl = FormControlsEnum.EMAIL;
    passwordControl = FormControlsEnum.PASSWORD;
    signInButtonType = ButtonTypesEnum.PRIMARY;
    externalButtonType = ButtonTypesEnum.EXTERNAL;
    signInForm: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.signInForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        });
    }

    submit(): void {
        console.log(this.signInForm.value);
    }

    handleFacebookSignIn(): void {
        console.log('Continue with Facebook!');
    }

    handleGoogleSignIn(): void {
        console.log('Continue with Google!');
    }
}
