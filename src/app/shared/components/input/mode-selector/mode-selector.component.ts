import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MODES } from '@src/app/core/models/modes.enum';

@Component({
    selector: 'app-mode-selector',
    templateUrl: './mode-selector.component.html',
    styleUrls: ['./mode-selector.component.scss'],
})
export class ModeSelectorComponent {
    @Input() mode: MODES;
    @Input() title: string;
    @Input() isActive: boolean;
    @Output() clickMode: EventEmitter<MODES> = new EventEmitter<MODES>();

    constructor() {}

    sendValue(): void {
        this.clickMode.emit(this.mode);
    }
}
