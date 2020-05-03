import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SafePipe } from 'src/app/core/pipes/safe.pipe';

import { PostComponent } from './post.component';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';
import { mockedOcean } from 'src/app/core/mocks/ocean.mockup';

describe('PostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [PostComponent, AvatarComponent, SafePipe],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
        component.post = mockedOcean[0];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
