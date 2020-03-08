import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModesEnum } from '@src/app/core/models/modes.enum';

@Component({
    selector: 'app-mode',
    templateUrl: './mode.component.html',
    styleUrls: ['./mode.component.scss'],
})
export class ModeComponent {
    @Input() mode: ModesEnum;
    @Input() title: string;
    @Input() isActive: boolean;
    @Output() clickMode: EventEmitter<ModesEnum> = new EventEmitter<ModesEnum>();

    constructor() {}

    sendValue(): void {
        this.clickMode.emit(this.mode);
    }
}
