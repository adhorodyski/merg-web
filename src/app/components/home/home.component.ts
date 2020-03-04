import { Component, OnInit } from '@angular/core';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';
import { TagsEnum } from '@src/app/core/models/tags.enum';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    title = 'merg-app';
    value = TagsEnum.ART;
    value2 = TagsEnum.BEAUTY;
    value3 = TagsEnum.FASHION;
    value4 = TagsEnum.COMEDY;
    size = ComponentsSizesEnum.SMALL;
    activeTags: TagsEnum[] = [];

    constructor() {}

    ngOnInit() {}

    handleEvent($event): void {
        if (this.activeTags.includes($event)) {
            this.activeTags = this.activeTags.filter(el => el !== $event);
        } else {
            this.activeTags.push($event);
        }
        console.log(this.activeTags);
    }
}
