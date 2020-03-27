import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonTypesEnum } from '@src/app/core/models/button-types.enum';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() type: ButtonTypesEnum;
    @Input() message: string;
    @Input() provider?: string;
    @Input() disabled?: boolean;
    @Input() size?: ComponentsSizesEnum;
    @Output() handleClick: EventEmitter<any> = new EventEmitter();

    constructor() {}

    sendClick(): void {
        this.handleClick.emit();
    }
}
