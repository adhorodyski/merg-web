import { Component, Input } from '@angular/core';
import { IProviderDetails } from 'src/app/core/models/provider-details.model';
import { PROVIDERS } from 'src/app/core/models/providers.enum';
import { IUser } from 'src/app/core/models/user.model';

@Component({
    selector: 'app-settings-streams',
    templateUrl: './settings-streams.component.html',
    styleUrls: ['./settings-streams.component.scss'],
})
export class SettingsStreamsComponent {
    @Input() user: IUser;

    providers = Object.keys(PROVIDERS);

    constructor() {}

    getProvider(providerIDX) {
        return PROVIDERS[this.providers[providerIDX]];
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

    addProviderDetails(provider): void {
        console.log(provider);
    }

    removeProviderDetails(providerDetailsIDX, provider: PROVIDERS): void {
        this.getProviderDetails(provider).splice(providerDetailsIDX, 1);
    }

    isProviderEmpty(providerDetails: IProviderDetails[]): boolean {
        return Boolean(providerDetails.length);
    }
}
