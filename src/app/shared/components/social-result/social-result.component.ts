import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { SocialResultStatesEnum } from '@src/app/core/models/social-result-states.enum';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { IUser } from '@src/app/core/models/user.model';

@Component({
    selector: 'app-social-result',
    templateUrl: './social-result.component.html',
    styleUrls: ['./social-result.component.scss'],
    animations: [
        trigger('inOutAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(-5px)' }),
                animate('0.3s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
            transition(':leave', [
                style({ opacity: 1, transform: 'translateY(0)' }),
                animate('0.3s ease-in-out', style({ opacity: 0, transform: 'translateY(-5px)' })),
            ]),
        ]),
    ],
})
export class SocialResultComponent {
    @Input() state: SocialResultStatesEnum;
    @Input() provider: ProvidersEnum;
    @Input() streams: IUser[];
    @Input() isHidden: boolean;
    @Input() isDone: boolean;
    @Input() addStreamsTitle: string;
    @Output() expand = new EventEmitter<boolean>();
    @Output() add = new EventEmitter<ProvidersEnum>();
    @Output() remove = new EventEmitter<object>();

    empty = SocialResultStatesEnum.EMPTY;
    filled = SocialResultStatesEnum.FILLED;
    condensed = SocialResultStatesEnum.CONDENSED;

    avatarSize = ComponentsSizesEnum.MEDIUM;

    constructor() {}

    isLastStream(stream): boolean {
        return stream === this.streams[this.streams.length - 1];
    }

    expandStreams(): void {
        this.expand.emit(true);
    }

    addStream(provider): void {
        this.add.emit(provider);
    }

    removeStream(provider, streamIDX): void {
        this.remove.emit({ provider, streamIDX });
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
