import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module'

import {AppComponent}  from './app.component';
import {CountryService} from './section/service/country.service';
import {AutoCompleteComponent}  from './section/autocomplete.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        AutoCompleteModule,
        WizardModule,
        SelectButtonModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        AutoCompleteComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, CountryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
