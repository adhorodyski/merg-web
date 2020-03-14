import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormIconsEnum } from '@src/app/core/models/form-icons.enum';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss'],
    animations: [inOutAnimation],
})
export class PasswordComponent implements OnInit {
    @Input() type: string;
    @Input() value: string;

    private icons = FormIconsEnum;
    inputForm: FormGroup;

    constructor(private controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.inputForm = <FormGroup>this.controlContainer.control;
    }

    viewPassword(): void {
        this.type = this.type === 'password' ? 'text' : 'password';
    }
}
