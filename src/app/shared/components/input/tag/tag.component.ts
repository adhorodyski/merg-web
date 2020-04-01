import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SIZES } from '@src/app/core/models/sizes.enum';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
    @Input() isActive: boolean;
    @Input() value: string;
    @Input() size: SIZES;
    @Output() clickTag: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    sendValue(): void {
        this.clickTag.emit(this.value);
    }
}
