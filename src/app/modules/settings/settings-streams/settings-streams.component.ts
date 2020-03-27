import { Component, Input, OnInit } from '@angular/core';
import { IStream } from '@src/app/core/models/stream.model';
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

    addStream(provider): void {
        console.log(provider);
    }

    removeStream(streamIDX, providerIDX): void {
        this.user.providers[providerIDX].streams.splice(streamIDX, 1);
    }

    isEmpty(streams: IStream[]): boolean {
        return Boolean(streams.length);
    }
}
