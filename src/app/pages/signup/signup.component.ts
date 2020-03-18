import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatternValidatorDirective } from '@src/app/core/directives/pattern-validator.directive';
import { ButtonTypesEnum } from '@src/app/core/models/button-types.enum';
import { FormControlsEnum } from '@src/app/core/models/form-controls.enum';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [inOutAnimation],
})
export class SignUpComponent implements OnInit {
    usernameControl = FormControlsEnum.USERNAME;
    nameControl = FormControlsEnum.NAME;
    emailControl = FormControlsEnum.EMAIL;
    passwordControl = FormControlsEnum.PASSWORD;
    signUpButtonType = ButtonTypesEnum.PRIMARY;
    signUpForm: FormGroup;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.signUpForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                PatternValidatorDirective.patternValidator(/\d/, { hasNumbers: true }),
                PatternValidatorDirective.patternValidator(/[a-zA-Z]/, { hasLetters: true }),
                PatternValidatorDirective.patternValidator(/[£§!@#$%^&*()_+={}:";'<>,.?]/, {
                    hasSpecialCharacters: true,
                }),
            ]),
        });
    }

    submit(): void {
        console.log(this.signUpForm.value);
    }

    isPasswordStrongEnough(): boolean {
        const { password } = this.signUpForm.controls;

        return (
            password.valid &&
            !password.hasError('hasNumbers') &&
            !password.hasError('hasLetters') &&
            !password.hasError('hasSpecialCharacters')
        );
    }

    isPasswordLongEnough(): boolean {
        return this.signUpForm.value.password.length >= 8;
    }

    goBack(): void {
        this.router.navigate(['landing']);
    }
}
