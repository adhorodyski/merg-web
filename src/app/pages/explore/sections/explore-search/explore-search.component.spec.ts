import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ExploreSearchComponent } from './explore-search.component';
import { SearchResultComponent } from '@src/app/shared/components/search-result/search-result.component';
import { SearchComponent } from '@src/app/shared/components/input/search/search.component';
import { TagComponent } from '@src/app/shared/components/input/tag/tag.component';
import { AvatarComponent } from '@src/app/shared/components/avatar/avatar.component';
import { SearchService } from '@src/app/core/services/search.service';

describe('ExploreSearchComponent', () => {
    let component: ExploreSearchComponent;
    let fixture: ComponentFixture<ExploreSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [SearchService],
            imports: [RouterTestingModule, FormsModule, BrowserAnimationsModule],
            declarations: [
                ExploreSearchComponent,
                SearchResultComponent,
                SearchComponent,
                TagComponent,
                AvatarComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExploreSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
