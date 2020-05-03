import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ExploreComponent } from './explore.component';
import { ExploreSearchComponent } from 'src/app/modules/explore/explore-search/explore-search.component';
import { SearchComponent } from 'src/app/shared/components/input/search/search.component';
import { SearchResultComponent } from 'src/app/shared/components/search-result/search-result.component';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';
import { TagComponent } from 'src/app/shared/components/input/tag/tag.component';
import { StoriesComponent } from 'src/app/shared/features/stories/stories.component';
import { StoryComponent } from 'src/app/shared/components/story/story.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

describe('ExploreComponent', () => {
    let component: ExploreComponent;
    let fixture: ComponentFixture<ExploreComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule, FormsModule, RouterTestingModule],
            declarations: [
                ExploreComponent,
                ExploreSearchComponent,
                SearchComponent,
                TagComponent,
                SearchResultComponent,
                AvatarComponent,
                StoriesComponent,
                StoryComponent,
                FooterComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExploreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
