import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {OverlayPanelModule} from 'primeng/components/overlaypanel/overlaypanel';
import {StepsModule} from 'primeng/components/steps/steps';
import {GrowlModule} from 'primeng/components/growl/growl';

import {AppComponent}  from './app.component';
import {OverlaypanelComponent}  from './section/overlaypanel.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        OverlayPanelModule,
        RadioButtonModule,
        StepsModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        OverlaypanelComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
