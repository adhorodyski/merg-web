import { Component, OnInit } from '@angular/core';
import { mockedUser } from '@src/app/core/mocks/user.mockup';
import { SocialResultStatesEnum } from '@src/app/core/models/social-result-states.enum';
import { IUser } from '@src/app/core/models/user.model';

@Component({
    selector: 'app-settings-streams',
    templateUrl: './settings-streams.component.html',
    styleUrls: ['./settings-streams.component.scss'],
})
export class SettingsStreamsComponent implements OnInit {
    user: IUser = mockedUser;

    // TODO create an interface for socialResult behaviours & create instances dynamically
    socialResults = [
        {
            state: SocialResultStatesEnum.CONDENSED,
            isHidden: false,
            isDone: true,
        },
        {
            state: SocialResultStatesEnum.CONDENSED,
            isHidden: false,
            isDone: true,
        },
    ];

    constructor() {}

    ngOnInit(): void {}

    expandStreams(providerIDX): void {
        this.socialResults[providerIDX].state = SocialResultStatesEnum.FILLED;
    }

    addStream(provider): void {
        console.log(provider);
    }

    removeStream(streamIDX, providerIDX): void {
        if (this.user.providers[providerIDX].streams.length === 1) {
            this.socialResults[providerIDX].state = SocialResultStatesEnum.EMPTY;
            this.user.providers[providerIDX].streams.splice(streamIDX, 1);
        } else {
            this.user.providers[providerIDX].streams.splice(streamIDX, 1);
        }
    }
}
