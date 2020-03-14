import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormControlsEnum } from '@src/app/core/models/form-controls.enum';
import { FormIconsEnum } from '@src/app/core/models/form-icons.enum';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    animations: [inOutAnimation],
})
export class InputComponent implements OnInit {
    @Input() type: FormControlsEnum;
    @Input() size?: string;

    private icons = FormIconsEnum;
    inputForm: FormGroup;

    constructor(private controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.inputForm = <FormGroup>this.controlContainer.control;
    }
}
