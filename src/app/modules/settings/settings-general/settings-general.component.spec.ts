import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ModeSelectorComponent } from 'src/app/shared/components/input/mode-selector/mode-selector.component';

import { SettingsGeneralComponent } from './settings-general.component';
import { CountrySelectorComponent } from 'src/app/shared/components/input/country-selector/country-selector.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { ModeService } from 'src/app/core/services/mode.service';

describe('SettingsGeneralComponent', () => {
    let component: SettingsGeneralComponent;
    let fixture: ComponentFixture<SettingsGeneralComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            providers: [ModeService, LanguageService],
            declarations: [SettingsGeneralComponent, ModeSelectorComponent, CountrySelectorComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsGeneralComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
