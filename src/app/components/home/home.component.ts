import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    title = 'merg-app';
    type = 'password';
    value: string;

    constructor() {}

    ngOnInit() {}

    setValue(value: string) {
        this.value = value;
        console.log(this.value);
    }
}
