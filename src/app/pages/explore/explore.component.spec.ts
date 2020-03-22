import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ExploreComponent } from './explore.component';
import { StoriesComponent } from '@src/app/shared/sections/stories/stories.component';
import { StoryComponent } from '@src/app/shared/components/story/story.component';
import { FooterComponent } from '@src/app/shared/components/footer/footer.component';

describe('ExploreComponent', () => {
    let component: ExploreComponent;
    let fixture: ComponentFixture<ExploreComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule, RouterTestingModule],
            declarations: [ExploreComponent, StoriesComponent, StoryComponent, FooterComponent],
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
