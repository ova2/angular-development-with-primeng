import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import needed PrimeNG modules here
import {FieldsetModule} from 'primeng/components/fieldset/fieldset';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SharedModule} from 'primeng/primeng';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {FieldsetComponent}  from './section/fieldset.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        BrowserAnimationsModule,
        FieldsetModule,
        WizardModule,
        SharedModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        FieldsetComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
