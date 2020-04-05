import { Component } from '@angular/core';
import { SearchService } from '@src/app/core/services/search.service';
import { SIZES } from '@src/app/core/models/sizes.enum';
import { IUser } from '@src/app/core/models/user.model';

@Component({
    selector: 'app-explore-search',
    templateUrl: './explore-search.component.html',
    styleUrls: ['./explore-search.component.scss'],
})
export class ExploreSearchComponent {
    sizes = SIZES;

    searchValue: string;
    results: IUser[];

    tags: string[];
    activeTags: string[] = [];

    constructor(private searchService: SearchService) {
        this.getTags();
    }

    getTags(): void {
        this.tags = this.searchService.getTags();
    }

    handleSearchValue($event): void {
        this.searchValue = $event;
        this.results = this.searchService.searchByInput(this.searchValue);
    }

    handleTagValue($event): void {
        if (this.activeTags.includes($event)) {
            this.activeTags.splice(this.activeTags.indexOf($event), 1);
        } else {
            this.activeTags.push($event);
        }
        this.results = this.searchService.searchByTags(this.activeTags);
    }
}
