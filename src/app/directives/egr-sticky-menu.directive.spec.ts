import {EgrStickyMenuDirective} from './egr-sticky-menu.directive';
import {ElementRef, Renderer2} from "@angular/core";
import {async, TestBed} from "@angular/core/testing";

describe('EgrStickyMenuDirective', () => {
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [Renderer2, ElementRef]
        }).compileComponents();
    }));

    it('should create an instance', () => {
        // let renderer: jasmine.SpyObj<Renderer2>;
        // renderer = jasmine.createSpyObj('renderer', ['addClass', 'removeClass', 'setStyle']);

        fixture = TestBed.createComponent(EgrStickyMenuDirective);

        expect(fixture).toBeTruthy();
    });
});
