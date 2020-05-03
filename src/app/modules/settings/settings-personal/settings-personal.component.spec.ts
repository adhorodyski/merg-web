import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SettingsPersonalComponent } from './settings-personal.component';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AvatarSelectorComponent } from 'src/app/shared/components/input/avatar-selector/avatar-selector.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { mockedUser } from 'src/app/core/mocks/user.mockup';

describe('SettingsPersonalComponent', () => {
    let component: SettingsPersonalComponent;
    let fixture: ComponentFixture<SettingsPersonalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [
                SettingsPersonalComponent,
                InputComponent,
                ButtonComponent,
                AvatarSelectorComponent,
                AvatarComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsPersonalComponent);
        component = fixture.componentInstance;
        component.user = mockedUser;
        component.loggedUserForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
