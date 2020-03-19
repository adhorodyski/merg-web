import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeSelectorComponent } from './mode-selector.component';

describe('ModeComponent', () => {
    let component: ModeSelectorComponent;
    let fixture: ComponentFixture<ModeSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [ModeSelectorComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModeSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
