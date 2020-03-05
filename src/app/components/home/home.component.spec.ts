import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SafePipe } from '@src/app/core/pipes/safe.pipe';

import { HomeComponent } from './home.component';
import { PostComponent } from '@src/app/shared/components/post/post.component';
import { AvatarComponent } from '@src/app/shared/components/avatar/avatar.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent, PostComponent, AvatarComponent, SafePipe],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
