import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { IStream } from '@src/app/core/models/stream.model';
import { slideUp } from '@src/app/shared/animations/slideUp';

@Component({
    selector: 'app-social-result',
    templateUrl: './social-result.component.html',
    styleUrls: ['./social-result.component.scss'],
    animations: [slideUp],
})
export class SocialResultComponent {
    @Input() provider: ProvidersEnum;
    @Input() streams: IStream[] = [];
    @Input() isHidden = false;
    @Input() isDone = false;
    @Output() remove = new EventEmitter<number>();
    @Output() add = new EventEmitter<ProvidersEnum>();

    isExpanded = true;

    avatarSize = ComponentsSizesEnum.MEDIUM;

    constructor() {}

    isEmpty(): boolean {
        return Boolean(!this.streams.length);
    }

    isLastStream(stream): boolean {
        return stream === this.streams[this.streams.length - 1];
    }

    expandStreams(): void {
        this.isExpanded = !this.isExpanded;
    }

    addStream($event): void {
        this.add.emit($event);
    }

    removeStream(streamIDX): void {
        this.remove.emit(streamIDX);
    }

    clickResult(): void {
        if (this.isEmpty()) {
            this.addStream(this.provider);
        } else if (!this.isExpanded) {
            this.expandStreams();
        }
    }
}
