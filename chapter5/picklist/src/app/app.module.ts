import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {PickListModule} from 'primeng/components/picklist/picklist';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {PickListComponent}  from './section/picklist.component';
import {CountryService} from './section/service/countryservice';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        PickListModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        PickListComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},CountryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
