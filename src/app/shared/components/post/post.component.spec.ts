import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SafePipe } from '@src/app/core/pipes/safe.pipe';
import { AvatarComponent } from '@src/app/shared/components/avatar/avatar.component';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [SafePipe],
            declarations: [PostComponent, AvatarComponent, SafePipe],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
