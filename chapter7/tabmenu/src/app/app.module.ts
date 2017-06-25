import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import needed PrimeNG modules here
import {TabMenuModule} from 'primeng/components/tabmenu/tabmenu';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {TabMenuComponent}  from './section/tabmenu.component';
import {OverviewComponent}  from './section/pages/overview.component';
import {DownloadsComponent}  from './section/pages/downloads.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        TabMenuModule,
        WizardModule,
        BrowserAnimationsModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        TabMenuComponent,
        OverviewComponent,
        DownloadsComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
