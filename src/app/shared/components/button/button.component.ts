import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BUTTONS } from 'src/app/core/models/buttons.enum';
import { SIZES } from 'src/app/core/models/sizes.enum';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() type: BUTTONS;
    @Input() message: string;
    @Input() provider?: string;
    @Input() disabled?: boolean;
    @Input() size?: SIZES;
    @Output() handleClick: EventEmitter<any> = new EventEmitter();

    constructor() {}

    sendClick(): void {
        this.handleClick.emit();
    }
}
