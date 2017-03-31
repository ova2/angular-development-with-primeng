import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {ChipsModule} from 'primeng/components/chips/chips';
import {GrowlModule} from 'primeng/components/growl/growl';
import {StepsModule} from 'primeng/components/steps/steps';

import {AppComponent}  from './app.component';
import {ChipsComponent}  from './section/chips.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        ChipsModule,
        StepsModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        ChipsComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
