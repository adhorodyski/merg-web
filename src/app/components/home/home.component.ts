import { Component, OnInit } from '@angular/core';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { IUser } from '@src/app/core/models/user.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    title = 'merg-app';
    size = ComponentsSizesEnum.SMALL;
    provider: ProvidersEnum = ProvidersEnum.YOUTUBE;
    source = 'https://instagram.com/p/a1wDZKopa2/embed';
    timestamp = '1583329016';
    embed = 'https://www.youtube.com/embed/tgbNymZ7vqY';
    user: IUser = {
        username: 'ommy_yeaour',
        avatar: 'https://reidrealtors.com/wp-content/uploads/2017/12/pic-bio-melvin26-500x480-c-center.jpg',
    };

    constructor() {}

    ngOnInit() {}
}
