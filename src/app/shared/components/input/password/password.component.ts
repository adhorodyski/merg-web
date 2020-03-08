import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputIconsEnum } from '@src/app/core/models/input-icons.enum';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
    icons = InputIconsEnum;
    @Input() type: string;
    @Input() value: string;
    @Output() valueEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    sendValue(): void {
        this.valueEvent.emit(this.value);
    }

    viewPassword(): void {
        this.type = this.type === 'password' ? 'text' : 'password';
    }
}
