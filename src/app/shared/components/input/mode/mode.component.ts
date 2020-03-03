import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModesEnum } from '@src/app/core/models/modes.enum';

@Component({
    selector: 'app-mode',
    templateUrl: './mode.component.html',
    styleUrls: ['./mode.component.scss'],
})
export class ModeComponent {
    @Input() title: string;
    @Input() mode: ModesEnum;
    @Input() activeMode: ModesEnum = ModesEnum.LIGHT;
    @Output() clickMode: EventEmitter<ModesEnum> = new EventEmitter<ModesEnum>();

    constructor() {}

    sendValue(): void {
        this.clickMode.emit(this.mode);
    }
}
