import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';
import { SearchComponent } from 'src/app/shared/components/input/search/search.component';
import { SearchResultComponent } from 'src/app/shared/components/search-result/search-result.component';

describe('MainLayoutComponent', () => {
    let component: MainLayoutComponent;
    let fixture: ComponentFixture<MainLayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, BrowserAnimationsModule, FormsModule],
            declarations: [
                MainLayoutComponent,
                HeaderComponent,
                AvatarComponent,
                SearchComponent,
                SearchResultComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
