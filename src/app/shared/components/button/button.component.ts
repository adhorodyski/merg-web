import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() type: string;
    @Input() message: string;
    @Input() provider?: string;
    @Input() size?: ComponentsSizesEnum;
    @Output() click: EventEmitter<any> = new EventEmitter();

    constructor() {}

    sendClick(): void {
        this.click.emit();
    }
}
