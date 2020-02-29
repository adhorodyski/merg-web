import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    title = 'merg-app';
    steps = [1, 2];
    activeStepIDX = 1;

    constructor() {}

    ngOnInit() {}
}
