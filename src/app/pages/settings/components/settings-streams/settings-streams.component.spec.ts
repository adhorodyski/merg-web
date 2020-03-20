import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SettingsStreamsComponent } from './settings-streams.component';
import { SocialResultComponent } from '@src/app/shared/components/social-result/social-result.component';
import { AvatarComponent } from '@src/app/shared/components/avatar/avatar.component';

describe('SettingsStreamsComponent', () => {
    let component: SettingsStreamsComponent;
    let fixture: ComponentFixture<SettingsStreamsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [SettingsStreamsComponent, SocialResultComponent, AvatarComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsStreamsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
