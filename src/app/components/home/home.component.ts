import { Component, OnInit } from '@angular/core';
import { AccountsEnum } from '@src/app/core/models/accounts.enum';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    title = 'merg-app';
    avatar = 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg';
    username = 'ob_barrack';
    followers = '207,131';
    size = ComponentsSizesEnum.SMALL;
    accountType = AccountsEnum.CREATOR;

    constructor() {}

    ngOnInit() {}
}
