import { Component, Input, OnInit } from '@angular/core';
import { IProviderDetails } from '@src/app/core/models/provider-details.model';
import { IUser } from '@src/app/core/models/user.model';

@Component({
    selector: 'app-settings-streams',
    templateUrl: './settings-streams.component.html',
    styleUrls: ['./settings-streams.component.scss'],
})
export class SettingsStreamsComponent implements OnInit {
    @Input() user: IUser;

    constructor() {}

    ngOnInit(): void {}

    addProviderDetails(provider): void {
        console.log(provider);
    }

    removeProviderDetails(providerDetailsIDX, providerIDX): void {
        this.user.providers[providerIDX].details.splice(providerDetailsIDX, 1);
    }

    isProviderEmpty(providerDetails: IProviderDetails[]): boolean {
        return Boolean(providerDetails.length);
    }
}
