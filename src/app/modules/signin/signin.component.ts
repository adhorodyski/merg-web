import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BUTTONS } from '@src/app/core/models/buttons.enum';
import { FORM_CONTROLS } from '@src/app/core/models/form-controls.enum';
import { slideUp } from '@src/app/shared/animations/slideUp';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [slideUp],
})
export class SignInComponent implements OnInit {
    formControls = FORM_CONTROLS;
    buttons = BUTTONS;
    signInForm: FormGroup;

    constructor(private router: Router) {}

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

    goBack(): void {
        this.router.navigate(['landing']);
    }
}
