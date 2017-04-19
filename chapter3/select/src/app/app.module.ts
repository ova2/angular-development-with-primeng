import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import needed PrimeNG modules here
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {MultiSelectModule} from 'primeng/components/multiselect/multiselect';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {CountryService} from './section/service/countryservice';
import {SelectComponent}  from './section/select.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        DropdownModule,
        MultiSelectModule,
        GrowlModule,
        SelectButtonModule,
        WizardModule
    ],
    declarations: [
        AppComponent,
        SelectComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},CountryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
