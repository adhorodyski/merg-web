import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mockedUser } from '@src/app/core/mocks/user.mockup';
import { ButtonTypesEnum } from '@src/app/core/models/button-types.enum';
import { IProvider } from '@src/app/core/models/provider.model';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { IStream } from '@src/app/core/models/stream.model';
import { IUser } from '@src/app/core/models/user.model';
import { slideUp } from '@src/app/shared/animations/slideUp';

@Component({
    selector: 'app-merging',
    templateUrl: './merging.component.html',
    styleUrls: ['./merging.component.scss'],
    animations: [slideUp],
})
export class MergingComponent implements OnInit {
    user: IUser;
    providers = ProvidersEnum;
    buttonTypes = ButtonTypesEnum;
    steps: number[] = Array(Object.keys(ProvidersEnum).length);
    activeStepIDX = 0;
    isDone = false;

    constructor(private router: Router) {}

    ngOnInit() {
        this.user = mockedUser;
    }

    getProviderStreams(userProviders: IProvider[], resultProvider: ProvidersEnum): IStream[] {
        let streams = [];
        userProviders.forEach(provider => {
            if (provider.provider === resultProvider) {
                streams = provider.streams;
            }
        });
        return streams;
    }

    getProviderFromKey(providerKey: ProvidersEnum): ProvidersEnum {
        return this.providers[providerKey];
    }

    addStream(provider): void {
        console.log(provider);
    }

    removeStream(streamIDX: number, provider: ProvidersEnum): void {
        const providerStreams = this.getProviderStreams(this.user.providers, provider);
        providerStreams.splice(streamIDX, 1);
    }

    nextStep(): void {
        this.activeStepIDX++;
    }

    continue(): void {
        this.nextStep();
        if (this.activeStepIDX + 1 === this.steps.length) {
            this.isDone = true;
        }
    }

    submit(): void {
        this.nextStep();
        setTimeout(() => {
            this.router.navigate(['merging/tags']);
        }, 1500);
    }
}
