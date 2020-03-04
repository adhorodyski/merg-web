import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';
import { TagsEnum } from '@src/app/core/models/tags.enum';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
    @Input() isActive: boolean;
    @Input() value: TagsEnum;
    @Input() size: ComponentsSizesEnum;
    @Output() clickTag: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    sendValue(): void {
        this.clickTag.emit(this.value);
    }
}
