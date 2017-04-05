import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {MultiSelectModule} from 'primeng/components/multiselect/multiselect';
import {GrowlModule} from 'primeng/components/growl/growl';
import {StepsModule} from 'primeng/components/steps/steps';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';

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
        DropdownModule,
        MultiSelectModule,
        GrowlModule,
        SelectButtonModule,
        StepsModule
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
