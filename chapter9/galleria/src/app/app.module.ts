import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {GalleriaModule} from 'primeng/components/galleria/galleria';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {GalleriaComponent}  from './section/galleria.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        routes,
        FormsModule,
        GalleriaModule,
        GrowlModule,
        WizardModule
    ],
    declarations: [
        AppComponent,
        GalleriaComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
