import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-merging-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
    constructor(private router: Router) {}

    goBack(): void {
        this.router.navigate(['merging']);
    }
}
