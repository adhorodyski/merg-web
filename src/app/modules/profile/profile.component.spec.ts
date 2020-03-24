import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SafePipe } from '@src/app/core/pipes/safe.pipe';

import { ProfileOverviewComponent } from '@src/app/modules/profile/profile-overview/profile-overview.component';
import { AvatarComponent } from '@src/app/shared/components/avatar/avatar.component';
import { ButtonComponent } from '@src/app/shared/components/button/button.component';
import { FooterComponent } from '@src/app/shared/components/footer/footer.component';
import { ProfileComponent } from './profile.component';
import { PostComponent } from '@src/app/shared/components/post/post.component';
import { PostsComponent } from '@src/app/shared/features/posts/posts.component';

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule, RouterTestingModule],
            declarations: [
                ProfileComponent,
                ProfileOverviewComponent,
                FooterComponent,
                AvatarComponent,
                ButtonComponent,
                PostsComponent,
                PostComponent,
                SafePipe,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
