import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {OrderListModule} from 'primeng/components/orderlist/orderlist';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {OrderListComponent}  from './section/orderlist.component';
import {CountryService} from './section/service/countryservice';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        OrderListModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        OrderListComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},CountryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
