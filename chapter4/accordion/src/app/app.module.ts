import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {AccordionModule} from 'primeng/components/accordion/accordion';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SharedModule} from 'primeng/primeng';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {AccordionComponent}  from './section/accordion.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        AccordionModule,
        SharedModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        AccordionComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
