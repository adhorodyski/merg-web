import { Component, EventEmitter, Input, Output } from '@angular/core';
import { inOutSideAnimation } from '@src/app/shared/animations/inOutSideAnimation';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: [inOutAnimation, inOutSideAnimation],
})
export class SearchComponent {
    @Input() size?: string;
    @Input() value: string;
    @Output() valueEvent: EventEmitter<string> = new EventEmitter<string>();

    isActive = false;

    constructor() {}

    sendValue($event): void {
        this.valueEvent.emit($event);
    }

    clearInput(): void {
        this.valueEvent.emit('');
    }

    setActive(): void {
        this.isActive = !this.isActive;
    }
}
