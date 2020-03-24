import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SafePipe } from '@src/app/core/pipes/safe.pipe';

import { DashboardComponent } from './dashboard.component';
import { PostComponent } from '@src/app/shared/components/post/post.component';
import { PostsComponent } from '@src/app/shared/features/posts/posts.component';
import { AvatarComponent } from '@src/app/shared/components/avatar/avatar.component';
import { StoriesComponent } from '@src/app/shared/features/stories/stories.component';
import { StoryComponent } from '@src/app/shared/components/story/story.component';
import { FooterComponent } from '@src/app/shared/components/footer/footer.component';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule, RouterTestingModule],
            declarations: [
                DashboardComponent,
                PostsComponent,
                PostComponent,
                AvatarComponent,
                StoriesComponent,
                StoryComponent,
                FooterComponent,
                SafePipe,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
