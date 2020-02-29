import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() type: string;
    @Input() provider?: string;
    @Input() message: string;
    @Output() click = new EventEmitter();

    constructor() {}

    sendClick(): void {
        this.click.emit();
    }
}
