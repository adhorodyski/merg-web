import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MergingComponent } from './merging.component';
import { SocialResultComponent } from 'src/app/shared/components/social-result/social-result.component';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';
import { StatusComponent } from 'src/app/shared/components/status/status.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

describe('MergingComponent', () => {
    let component: MergingComponent;
    let fixture: ComponentFixture<MergingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, BrowserAnimationsModule],
            declarations: [MergingComponent, SocialResultComponent, AvatarComponent, StatusComponent, ButtonComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MergingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
