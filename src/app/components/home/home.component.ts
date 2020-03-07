import { Component, OnInit } from '@angular/core';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { SocialResultStatesEnum } from '@src/app/core/models/social-result-states.enum';
import { IUser } from '@src/app/core/models/user.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    title = 'merg-app';
    provider = ProvidersEnum.INSTAGRAM;
    state = SocialResultStatesEnum.EMPTY;
    isHidden = false;
    isDone = true;
    addStreamsTitle = 'Add streams';
    streams: IUser[] = [
        {
            username: 'ommy_yeaour',
            avatar: 'https://reidrealtors.com/wp-content/uploads/2017/12/pic-bio-melvin26-500x480-c-center.jpg',
        },
        {
            username: 'ommy_yeaour',
            avatar: 'https://reidrealtors.com/wp-content/uploads/2017/12/pic-bio-melvin26-500x480-c-center.jpg',
        },
    ];

    constructor() {}

    ngOnInit() {}

    expandStreams($event): void {
        this.state = SocialResultStatesEnum.FILLED;
    }

    addStream($event): void {
        this.state = SocialResultStatesEnum.FILLED;
        this.streams.push({
            username: 'barrackobm',
            avatar:
                'https://imgix.bustle.com/uploads/image/2018/5/9/d24b6667-76a8-4445-ba9f-b558241dc211-zaeh_bustle_apr2016-312.jpg',
        });
    }

    removeStream($event): void {
        const { provider, streamIDX } = $event;

        if (this.streams.length === 1) {
            this.state = SocialResultStatesEnum.EMPTY;
            this.streams.splice(streamIDX, 1);
        } else {
            this.streams.splice(streamIDX, 1);
        }
    }
}
