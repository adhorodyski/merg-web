import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputIconsEnum } from '@src/app/core/models/input-icons.enum';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {
    icons = InputIconsEnum;
    @Input() type: string;
    @Input() size?: string;
    @Input() value: string;
    @Output() valueEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    sendValue($event): void {
        this.valueEvent.emit($event);
    }

    clearInput(): void {
        this.valueEvent.emit('');
    }
}
