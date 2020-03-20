import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SettingsPersonalComponent } from './settings-personal.component';

describe('SettingsPersonalComponent', () => {
    let component: SettingsPersonalComponent;
    let fixture: ComponentFixture<SettingsPersonalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            providers: [],
            declarations: [SettingsPersonalComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsPersonalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
