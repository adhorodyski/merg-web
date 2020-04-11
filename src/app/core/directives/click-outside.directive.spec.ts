import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({
    template: '<div class="test" appClickOutside></div>',
})
class TestClickOutsideComponent {}

describe('ClickOutsideDirective', () => {
    let component: TestClickOutsideComponent;
    let fixture: ComponentFixture<TestClickOutsideComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestClickOutsideComponent, ClickOutsideDirective],
        });
        fixture = TestBed.createComponent(TestClickOutsideComponent);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        const directive = new ClickOutsideDirective(fixture);
        expect(directive).toBeTruthy();
    });
});
