import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {DataListModule} from 'primeng/components/datalist/datalist';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {DataListComponent}  from './section/datalist.component';
import {BrowserService} from './section/service/browserservice';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        DataListModule,
        WizardModule,
        DialogModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        DataListComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},BrowserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
