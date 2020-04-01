import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mockedUser } from '@src/app/core/mocks/user.mockup';
import { ButtonTypesEnum } from '@src/app/core/models/button-types.enum';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { IStream } from '@src/app/core/models/stream.model';
import { IUser } from '@src/app/core/models/user.model';
import { mergingRoll } from '@src/app/shared/animations/mergingRoll';
import { slideUp } from '@src/app/shared/animations/slideUp';

@Component({
    selector: 'app-merging',
    templateUrl: './merging.component.html',
    styleUrls: ['./merging.component.scss'],
    animations: [slideUp, mergingRoll],
})
export class MergingComponent implements OnInit {
    user: IUser;
    providers = ProvidersEnum;
    buttonTypes = ButtonTypesEnum;
    steps: number[] = Array(Object.keys(ProvidersEnum).length);
    activeStepIDX = 0;
    isDone = false;

    previousProvider: ProvidersEnum;
    previousStreams: IStream[];

    activeProvider: ProvidersEnum;
    activeStreams: IStream[];

    nextProvider: ProvidersEnum;
    nextStreams: IStream[];

    constructor(private router: Router) {}

    ngOnInit() {
        this.user = mockedUser;
        this.setVisibleProviders();
        this.setVisibleStreams();
    }

    getProviderStreams(resultProvider: ProvidersEnum): IStream[] {
        let streams: IStream[] = [];
        this.user.providers.forEach(provider => {
            if (provider.provider === resultProvider) {
                streams = provider.streams;
            }
        });
        return streams;
    }

    setVisibleProviders(): void {
        const providersKeys = Object.keys(ProvidersEnum);

        this.previousProvider = ProvidersEnum[providersKeys[this.activeStepIDX - 1]];
        this.activeProvider = ProvidersEnum[providersKeys[this.activeStepIDX]];
        this.nextProvider = ProvidersEnum[providersKeys[this.activeStepIDX + 1]];
    }

    setVisibleStreams(): void {
        this.previousStreams = this.getProviderStreams(this.previousProvider);
        this.activeStreams = this.getProviderStreams(this.activeProvider);
        this.nextStreams = this.getProviderStreams(this.nextProvider);
    }

    addStream(provider): void {
        console.log(provider);
    }

    removeStream(streamIDX: number, provider: ProvidersEnum): void {
        const providerStreams = this.getProviderStreams(provider);
        providerStreams.splice(streamIDX, 1);
    }

    nextStep(): void {
        this.activeStepIDX++;
        this.setVisibleProviders();
        this.setVisibleStreams();
    }

    continue(): void {
        this.nextStep();
        if (this.activeStepIDX + 1 === this.steps.length) {
            this.isDone = true;
        }
    }

    submit(): void {
        this.nextStep();
        this.router.navigate(['merging/tags']);
    }
}
