import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {TooltipComponent}  from './section/tooltip.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        TooltipModule,
        InputTextModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        TooltipComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
