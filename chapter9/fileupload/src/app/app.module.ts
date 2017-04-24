import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';

// import needed PrimeNG modules here
import {FileUploadModule} from 'primeng/components/fileupload/fileupload';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {FileUploadComponent}  from './section/fileupload.component';
import {routes} from './app-routing.module';
import {fakeBackendProvider} from './backend/fake-backend';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        FileUploadModule,
        CheckboxModule,
        GrowlModule,
        WizardModule
    ],
    declarations: [
        AppComponent,
        FileUploadComponent
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
