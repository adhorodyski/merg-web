import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FORM_CONTROLS } from '@src/app/core/models/form-controls.enum';
import { FORM_ICONS } from '@src/app/core/models/form-icons.enum';
import { slideUp } from '@src/app/shared/animations/slideUp';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    animations: [slideUp],
})
export class InputComponent implements OnInit {
    @Input() type: FORM_CONTROLS;
    @Input() size?: string;

    icons = FORM_ICONS;
    inputForm: FormGroup;

    constructor(private controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.inputForm = <FormGroup>this.controlContainer.control;
    }
}
