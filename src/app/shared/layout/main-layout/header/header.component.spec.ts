import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { SearchComponent } from '@src/app/shared/components/input/search/search.component';
import { AvatarComponent } from '@src/app/shared/components/avatar/avatar.component';
import { SearchResultComponent } from '@src/app/shared/components/search-result/search-result.component';
import { SearchService } from '@src/app/core/services/search.service';
import { AuthService } from '@src/app/core/services/auth.service';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [SearchService, AuthService],
            imports: [BrowserAnimationsModule, FormsModule, RouterTestingModule],
            declarations: [HeaderComponent, AvatarComponent, SearchComponent, SearchResultComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
