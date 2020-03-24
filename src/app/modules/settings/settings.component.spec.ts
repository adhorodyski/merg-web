import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SettingsComponent } from './settings.component';
import { SettingsGeneralComponent } from './settings-general/settings-general.component';
import { SettingsPersonalComponent } from '@src/app/modules/settings/settings-personal/settings-personal.component';
import { SettingsStreamsComponent } from '@src/app/modules/settings/settings-streams/settings-streams.component';
import { FooterComponent } from '@src/app/shared/components/footer/footer.component';
import { AuthService } from '@src/app/core/services/auth.service';
import { AvatarComponent } from '@src/app/shared/components/avatar/avatar.component';
import { ButtonComponent } from '@src/app/shared/components/button/button.component';
import { AvatarSelectorComponent } from '@src/app/shared/components/input/avatar-selector/avatar-selector.component';
import { CountrySelectorComponent } from '@src/app/shared/components/input/country-selector/country-selector.component';
import { InputComponent } from '@src/app/shared/components/input/input.component';
import { ModeSelectorComponent } from '@src/app/shared/components/input/mode-selector/mode-selector.component';
import { SocialResultComponent } from '@src/app/shared/components/social-result/social-result.component';

describe('SettingsComponent', () => {
    let component: SettingsComponent;
    let fixture: ComponentFixture<SettingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule, BrowserAnimationsModule],
            providers: [AuthService],
            declarations: [
                SettingsComponent,
                SettingsGeneralComponent,
                SettingsPersonalComponent,
                SettingsStreamsComponent,
                ModeSelectorComponent,
                CountrySelectorComponent,
                AvatarSelectorComponent,
                InputComponent,
                ButtonComponent,
                SocialResultComponent,
                AvatarComponent,
                FooterComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
