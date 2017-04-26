import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {DataScrollerModule} from 'primeng/components/datascroller/datascroller';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {ButtonModule} from 'primeng/components/button/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {DataScrollerComponent}  from './section/datascroller.component';
import {BrowserService} from './section/service/browserservice';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        DataScrollerModule,
        HttpModule,
        BrowserAnimationsModule,
        DialogModule,
        ButtonModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        DataScrollerComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},BrowserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
