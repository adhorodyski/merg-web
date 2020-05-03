import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarSelectorComponent } from './avatar-selector.component';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';
import { mockedUser } from 'src/app/core/mocks/user.mockup';

describe('AvatarSelectorComponent', () => {
    let component: AvatarSelectorComponent;
    let fixture: ComponentFixture<AvatarSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [AvatarSelectorComponent, AvatarComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AvatarSelectorComponent);
        component = fixture.componentInstance;
        component.user = mockedUser;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
