import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CapitalizePipe } from '@src/app/core/pipes/capitalize.pipe';
import { CountrySelectorComponent } from './country-selector.component';

describe('CountrySelectorComponent', () => {
    let component: CountrySelectorComponent;
    let fixture: ComponentFixture<CountrySelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [CountrySelectorComponent, CapitalizePipe],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CountrySelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
