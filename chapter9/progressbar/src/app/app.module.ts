import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {ProgressBarModule} from 'primeng/components/progressbar/progressbar';
import {GrowlModule} from 'primeng/components/growl/growl';

import {AppComponent}  from './app.component';
import {ProgressBarComponent}  from './section/progressbar.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        routes,
        FormsModule,
        ProgressBarModule,
        GrowlModule
    ],
    declarations: [AppComponent, ProgressBarComponent],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
