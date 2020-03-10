import { Component } from '@angular/core';

@Component({
    selector: 'app-header-minimal',
    templateUrl: './header-minimal.component.html',
    styleUrls: ['./header-minimal.component.scss'],
})
export class HeaderMinimalComponent {
    company = 'merg';

    constructor() {}
}
