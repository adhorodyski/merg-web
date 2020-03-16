import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MinimalLayoutComponent } from './minimal-layout.component';
import { HeaderMinimalComponent } from './header-minimal/header-minimal.component';
import { FooterComponent } from '@src/app/shared/components/footer/footer.component';

describe('MainLayoutComponent', () => {
    let component: MinimalLayoutComponent;
    let fixture: ComponentFixture<MinimalLayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [MinimalLayoutComponent, HeaderMinimalComponent, FooterComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MinimalLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
