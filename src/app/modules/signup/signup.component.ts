import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatternValidatorDirective } from '@src/app/core/directives/pattern-validator.directive';
import { ACCOUNTS } from '@src/app/core/models/accounts.enum';
import { BUTTONS } from '@src/app/core/models/buttons.enum';
import { FORM_CONTROLS } from '@src/app/core/models/form-controls.enum';
import { slideUp } from '@src/app/shared/animations/slideUp';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [slideUp],
})
export class SignUpComponent implements OnInit {
    formControls = FORM_CONTROLS;
    buttons = BUTTONS;

    signUpForm: FormGroup;
    accountType: ACCOUNTS;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => {
            this.accountType = data['accountType'] || '';
        });

        this.signUpForm = new FormGroup({
            accountType: new FormControl(this.accountType, [Validators.required]),
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
