import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CapitalizePipe } from '@src/app/core/pipes/capitalize.pipe';
import { CountrySelectorComponent } from '@src/app/shared/components/input/country-selector/country-selector.component';
import { ModeSelectorComponent } from '@src/app/shared/components/input/mode-selector/mode-selector.component';

import { SettingsComponent } from './settings.component';
import { SettingsGeneralComponent } from './components/settings-general/settings-general.component';
import { FooterComponent } from '@src/app/shared/components/footer/footer.component';

describe('SettingsComponent', () => {
    let component: SettingsComponent;
    let fixture: ComponentFixture<SettingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, BrowserAnimationsModule],
            declarations: [
                SettingsComponent,
                SettingsGeneralComponent,
                ModeSelectorComponent,
                CountrySelectorComponent,
                FooterComponent,
                CapitalizePipe,
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
