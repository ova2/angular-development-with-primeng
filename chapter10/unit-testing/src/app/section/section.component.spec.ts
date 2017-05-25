import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {SectionComponent} from './section.component';
import {FormsModule} from '@angular/forms';

describe('Component: SectionComponent', () => {
    let fixture: ComponentFixture<SectionComponent>;
    let sectionComponent: SectionComponent;
    let element: any;
    let debugElement: DebugElement;

    // setup
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [SectionComponent]
        });

        fixture = TestBed.createComponent(SectionComponent);
        sectionComponent = fixture.componentInstance;
        element = fixture.nativeElement;
        debugElement = fixture.debugElement;
    });

    afterEach(() => {
        if (fixture) {
            fixture.destroy();
        }
    });

    // specs
    it('should render `James Bond`', async(() => {
        sectionComponent.username = 'James Bond';

        // trigger change detection
        fixture.detectChanges();

        // wait until fixture is stable and check then the name
        fixture.whenStable().then(() => {
            // first approach
            expect(element.querySelector('input[name=username]').value).toBe('James Bond');
            // second approach
            expect(debugElement.query(By.css('input[name=username]')).nativeElement.value).toBe('James Bond');
        });
    }));
});

