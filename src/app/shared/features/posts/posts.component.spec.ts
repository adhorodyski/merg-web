import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SafePipe } from 'src/app/core/pipes/safe.pipe';
import { PostService } from 'src/app/core/services/post.service';

import { PostsComponent } from './posts.component';
import { PostComponent } from 'src/app/shared/components/post/post.component';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';

describe('PostsComponent', () => {
    let component: PostsComponent;
    let fixture: ComponentFixture<PostsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [PostService],
            declarations: [PostsComponent, PostComponent, AvatarComponent, SafePipe],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
