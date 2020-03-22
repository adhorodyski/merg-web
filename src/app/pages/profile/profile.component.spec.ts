import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileOverviewComponent } from '@src/app/pages/profile/sections/profile-overview/profile-overview.component';
import { AvatarComponent } from '@src/app/shared/components/avatar/avatar.component';
import { ButtonComponent } from '@src/app/shared/components/button/button.component';
import { FooterComponent } from '@src/app/shared/components/footer/footer.component';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [
                ProfileComponent,
                ProfileOverviewComponent,
                FooterComponent,
                AvatarComponent,
                ButtonComponent,
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
