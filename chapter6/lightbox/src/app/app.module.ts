import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {LightboxModule} from 'primeng/components/lightbox/lightbox';
import {GrowlModule} from 'primeng/components/growl/growl';
import {StepsModule} from 'primeng/components/steps/steps';

import {AppComponent}  from './app.component';
import {LightboxComponent}  from './section/lightbox.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        LightboxModule,
        StepsModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        InputMaskComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
