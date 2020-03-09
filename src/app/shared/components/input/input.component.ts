import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputIconsEnum } from '@src/app/core/models/input-icons.enum';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    animations: [
        trigger('inOutAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(-5px)' }),
                animate('0.3s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
            transition(':leave', [
                style({ opacity: 1, transform: 'translateY(0)' }),
                animate('0.3s ease-in-out', style({ opacity: 0, transform: 'translateY(-5px)' })),
            ]),
        ]),
    ],
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
