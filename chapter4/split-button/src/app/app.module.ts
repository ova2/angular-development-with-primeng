import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {SplitButtonModule} from 'primeng/components/splitbutton/splitbutton';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent}  from './app.component';
import {SplitButtonComponent}  from './section/splitbutton.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        SplitButtonModule,
        BrowserAnimationsModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        SplitButtonComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
