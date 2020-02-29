import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    title = 'merg-app';
    provider = 'facebook';
    size = 'big';
    username = 'tommyjerra';

    constructor() {}

    ngOnInit() {}
}
