import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SocialResultComponent } from './social-result.component';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';

describe('SocialResultComponent', () => {
    let component: SocialResultComponent;
    let fixture: ComponentFixture<SocialResultComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [SocialResultComponent, AvatarComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SocialResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
