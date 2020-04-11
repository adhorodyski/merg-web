import { Component } from '@angular/core';
import { AuthService } from '@src/app/core/services/auth.service';
import { SearchService } from '@src/app/core/services/search.service';
import { IUser } from '@src/app/core/models/user.model';
import { SIZES } from '@src/app/core/models/sizes.enum';
import { mockedUser } from '@src/app/core/mocks/user.mockup';
import { slideUp } from '@src/app/shared/animations/slideUp';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [slideUp],
})
export class HeaderComponent {
    company = 'merg';
    sizes = SIZES;
    user: IUser = mockedUser;

    searchValue = '';
    results: IUser[];
    isSearching: boolean;

    isDropdownVisible = false;

    constructor(private searchService: SearchService, private authService: AuthService) {}

    handleSearchValue($event): void {
        this.isSearching = true;
        this.searchValue = $event;
        this.results = this.searchService.searchByInput(this.searchValue);
    }

    closeSearch(): void {
        setTimeout(() => (this.isSearching = false), 100);
    }

    triggerDropdown(): void {
        this.isDropdownVisible = !this.isDropdownVisible;
    }

    signOut(): void {
        this.authService.signOut();
    }
}
