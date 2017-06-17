import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {PanelModule} from 'primeng/components/panel/panel';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SplitButtonModule} from 'primeng/components/splitbutton/splitbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/components/button/button';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {PanelComponent}  from './section/panel.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        PanelModule,
        SplitButtonModule,
        BrowserAnimationsModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        PanelComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
