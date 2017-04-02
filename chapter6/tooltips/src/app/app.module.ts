import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {StepsModule} from 'primeng/components/steps/steps';
import {GrowlModule} from 'primeng/components/growl/growl';

import {AppComponent}  from './app.component';
import {TooltipComponent}  from './section/tooltip.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        TooltipModule,
        StepsModule,
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
