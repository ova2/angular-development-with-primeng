import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {DataGridModule} from 'primeng/components/datagrid/datagrid';
import {PanelModule} from 'primeng/components/panel/panel';
import {DialogModule} from 'primeng/components/dialog/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {DataGridComponent}  from './section/datagrid.component';
import {BrowserService} from './section/service/browser.service';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        DataGridModule,
        PanelModule,
        WizardModule,
        DialogModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        DataGridComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},BrowserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
