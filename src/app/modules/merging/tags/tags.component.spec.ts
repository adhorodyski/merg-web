import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { TagsComponent } from './tags.component';
import { TagComponent } from 'src/app/shared/components/input/tag/tag.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

describe('TagsComponent', () => {
    let component: TagsComponent;
    let fixture: ComponentFixture<TagsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, BrowserAnimationsModule],
            declarations: [TagsComponent, TagComponent, ButtonComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TagsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
