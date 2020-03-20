import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SocialResultStatesEnum } from '@src/app/core/models/social-result-states.enum';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { IStream } from '@src/app/core/models/stream.model';
import { inOutAnimation } from '@src/app/shared/animations/inOutAnimation';

@Component({
    selector: 'app-social-result',
    templateUrl: './social-result.component.html',
    styleUrls: ['./social-result.component.scss'],
    animations: [inOutAnimation],
})
export class SocialResultComponent {
    @Input() state: SocialResultStatesEnum;
    @Input() provider: ProvidersEnum;
    @Input() streams: IStream[];
    @Input() isHidden: boolean;
    @Input() isDone: boolean;
    @Output() expand = new EventEmitter<null>();
    @Output() remove = new EventEmitter<number>();
    @Output() add = new EventEmitter<ProvidersEnum>();

    empty = SocialResultStatesEnum.EMPTY;
    filled = SocialResultStatesEnum.FILLED;
    condensed = SocialResultStatesEnum.CONDENSED;

    avatarSize = ComponentsSizesEnum.MEDIUM;

    constructor() {}

    isLastStream(stream): boolean {
        return stream === this.streams[this.streams.length - 1];
    }

    expandStreams(): void {
        this.expand.emit();
    }

    addStream($event): void {
        this.add.emit($event);
    }

    removeStream(streamIDX): void {
        this.remove.emit(streamIDX);
    }

    clickResult(newState: SocialResultStatesEnum): void {
        switch (newState) {
            case SocialResultStatesEnum.CONDENSED:
                this.expandStreams();
                break;
            case SocialResultStatesEnum.EMPTY:
                this.addStream(this.provider);
                break;
        }
    }
}
