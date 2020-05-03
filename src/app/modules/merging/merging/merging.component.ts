import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mockedUser } from 'src/app/core/mocks/user.mockup';
import { BUTTONS } from 'src/app/core/models/buttons.enum';
import { PROVIDERS } from 'src/app/core/models/providers.enum';
import { IProviderDetails } from 'src/app/core/models/provider-details.model';
import { IUser } from 'src/app/core/models/user.model';
import { mergingRoll } from 'src/app/shared/animations/mergingRoll';
import { slideUp } from 'src/app/shared/animations/slideUp';

@Component({
    selector: 'app-merging',
    templateUrl: './merging.component.html',
    styleUrls: ['./merging.component.scss'],
    animations: [slideUp, mergingRoll],
})
export class MergingComponent implements OnInit {
    user: IUser;
    providers = PROVIDERS;
    buttons = BUTTONS;
    steps: number[] = Array(Object.keys(PROVIDERS).length);
    activeStepIDX = 0;
    isDone = false;

    previousProvider: PROVIDERS;
    previousProviderDetails: IProviderDetails[];

    activeProvider: PROVIDERS;
    activeProviderDetails: IProviderDetails[];

    nextProvider: PROVIDERS;
    nextProviderDetails: IProviderDetails[];

    constructor(private router: Router) {}

    ngOnInit() {
        this.user = mockedUser;
        this.setVisibleProviders();
        this.setVisibleProvidersDetails();
    }

    getProviderDetails(resultProvider: PROVIDERS): IProviderDetails[] {
        let providerDetails: IProviderDetails[] = [];
        this.user.providers.forEach(provider => {
            if (provider.name === resultProvider) {
                providerDetails = provider.details;
            }
        });
        return providerDetails;
    }

    setVisibleProviders(): void {
        const providersKeys = Object.keys(PROVIDERS);

        this.previousProvider = PROVIDERS[providersKeys[this.activeStepIDX - 1]];
        this.activeProvider = PROVIDERS[providersKeys[this.activeStepIDX]];
        this.nextProvider = PROVIDERS[providersKeys[this.activeStepIDX + 1]];
    }

    setVisibleProvidersDetails(): void {
        this.previousProviderDetails = this.getProviderDetails(this.previousProvider);
        this.activeProviderDetails = this.getProviderDetails(this.activeProvider);
        this.nextProviderDetails = this.getProviderDetails(this.nextProvider);
    }

    addProviderDetails(provider): void {
        console.log(provider);
    }

    removeProviderDetails(providerDetailsIDX: number, provider: PROVIDERS): void {
        const providerDetails = this.getProviderDetails(provider);
        providerDetails.splice(providerDetailsIDX, 1);
    }

    nextStep(): void {
        this.activeStepIDX++;
        this.setVisibleProviders();
        this.setVisibleProvidersDetails();
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
