import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BUTTONS } from '@src/app/core/models/buttons.enum';
import { SIZES } from '@src/app/core/models/sizes.enum';
import { SearchService } from '@src/app/core/services/search.service';
import { slideUp } from '@src/app/shared/animations/slideUp';

@Component({
    selector: 'app-merging-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss'],
    animations: [slideUp],
})
export class TagsComponent implements OnInit {
    tags: string[];
    activeTags: string[] = [];
    sizes = SIZES;
    buttons = BUTTONS;

    constructor(private router: Router, private searchService: SearchService) {}

    ngOnInit(): void {
        this.getTags();
    }

    getTags(): void {
        this.tags = this.searchService.getTags();
    }

    handleTagValue($event): void {
        if (this.activeTags.includes($event)) {
            this.activeTags.splice(this.activeTags.indexOf($event), 1);
        } else {
            this.activeTags.push($event);
        }
    }

    submit(): void {
        console.log(this.activeTags);
    }

    goBack(): void {
        this.router.navigate(['merging']);
    }
}
