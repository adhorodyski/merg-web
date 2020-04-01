import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';
import { IProviderDetails } from '@src/app/core/models/provider-details.model';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { slideUp } from '@src/app/shared/animations/slideUp';

@Component({
    selector: 'app-social-result',
    templateUrl: './social-result.component.html',
    styleUrls: ['./social-result.component.scss'],
    animations: [slideUp],
})
export class SocialResultComponent {
    @Input() provider: ProvidersEnum;
    @Input() providerDetails: IProviderDetails[] = [];
    @Input() isHidden = false;
    @Input() isExpanded = true;
    @Input() isDone = false;
    @Output() remove = new EventEmitter<number>();
    @Output() add = new EventEmitter<ProvidersEnum>();

    avatarSize = ComponentsSizesEnum.MEDIUM;

    constructor() {}

    addProviderDetails($event): void {
        this.add.emit($event);
    }

    removeProviderDetails(providerDetailsIDX): void {
        this.remove.emit(providerDetailsIDX);
    }

    expandProviderDetails(): void {
        this.isExpanded = !this.isExpanded;
    }

    isProviderEmpty(): boolean {
        return Boolean(!this.providerDetails.length);
    }

    areLastProviderDetails(providerDetails): boolean {
        return providerDetails === this.providerDetails[this.providerDetails.length - 1];
    }
}
