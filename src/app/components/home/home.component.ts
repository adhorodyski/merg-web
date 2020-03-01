import { Component, OnInit } from '@angular/core';
import { AvatarSizesEnum } from '@src/app/core/models/avatar-sizes.enum';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    title = 'merg-app';
    source = 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg';
    size: AvatarSizesEnum = AvatarSizesEnum.BIG;
    username = 'tommyjerrya';

    constructor() {}

    ngOnInit() {}
}
