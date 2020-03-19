import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModesEnum } from '@src/app/core/models/modes.enum';

@Component({
    selector: 'app-mode-selector',
    templateUrl: './mode-selector.component.html',
    styleUrls: ['./mode-selector.component.scss'],
})
export class ModeSelectorComponent {
    @Input() mode: ModesEnum;
    @Input() title: string;
    @Input() isActive: boolean;
    @Output() clickMode: EventEmitter<ModesEnum> = new EventEmitter<ModesEnum>();

    constructor() {}

    sendValue(): void {
        this.clickMode.emit(this.mode);
    }
}
