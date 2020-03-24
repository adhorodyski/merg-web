import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOverviewComponent } from './profile-overview.component';
import { AvatarComponent } from '@src/app/shared/components/avatar/avatar.component';
import { ButtonComponent } from '@src/app/shared/components/button/button.component';
import { mockedUser } from '@src/app/core/mocks/user.mockup';

describe('ProfileOverviewComponent', () => {
    let component: ProfileOverviewComponent;
    let fixture: ComponentFixture<ProfileOverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileOverviewComponent, AvatarComponent, ButtonComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileOverviewComponent);
        component = fixture.componentInstance;
        component.user = mockedUser;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
