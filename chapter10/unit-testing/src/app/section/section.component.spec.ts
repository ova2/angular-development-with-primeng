import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {By, BrowserModule} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';

import {AppComponent}  from '../app.component';
import {SectionComponent}  from './section.component';
import {routes} from '../app-routing.module';

import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/components/button/button';

describe('Component: SectionComponent', () => {
    let fixture: ComponentFixture<SectionComponent>;
    let sectionComponent: SectionComponent;
    let element: any;
    let debugElement: DebugElement;

    // setup
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                routes,
                FormsModule,
                ButtonModule,
                InputTextModule
            ],
            declarations: [AppComponent, SectionComponent],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}],
        });

        fixture = TestBed.createComponent(SectionComponent);
        sectionComponent = fixture.componentInstance;
        element = fixture.nativeElement;
        debugElement = fixture.debugElement;
    });

    // specs
    it('should render `James Bond`', async(() => {
        sectionComponent.username = 'James Bond';

        //trigger change detection
        fixture.detectChanges();

        // wait until fixture is stable and check then the name
        fixture.whenStable().then(() => {
            expect(element.querySelector('input[name=username]').value).toBe('James Bond');
            expect(debugElement.query(By.css('input[name=username]')).nativeElement.value).toBe('James Bond');
        });
    }));
})

