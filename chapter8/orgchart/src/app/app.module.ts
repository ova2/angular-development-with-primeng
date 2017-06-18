import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {OrganizationChartModule} from 'primeng/components/organizationchart/organizationchart';
import {GrowlModule} from 'primeng/components/growl/growl';
import {DialogModule} from 'primeng/components/dialog/dialog';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {AppComponent}  from './app.component';
import {OrgChartComponent}  from './section/orgchart.component';
import {routes} from './app-routing.module';
import {VCardService} from './section/service/vcard.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        routes,
        FormsModule,
        HttpModule,
        OrganizationChartModule,
        WizardModule,
        GrowlModule,
        DialogModule
    ],
    declarations: [
        AppComponent,
        OrgChartComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, VCardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
