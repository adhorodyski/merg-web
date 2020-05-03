import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from 'src/app/core/services/post.service';

import { StoriesComponent } from './stories.component';
import { StoryComponent } from 'src/app/shared/components/story/story.component';

describe('StoriesComponent', () => {
    let component: StoriesComponent;
    let fixture: ComponentFixture<StoriesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [PostService],
            declarations: [StoriesComponent, StoryComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StoriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
