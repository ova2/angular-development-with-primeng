import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {DialogModule} from 'primeng/components/dialog/dialog';
import {ButtonModule} from 'primeng/components/button/button';
import {StepsModule} from 'primeng/components/steps/steps';
import {GrowlModule} from 'primeng/components/growl/growl';
import {CommonModule} from '@angular/common';

import {AppComponent}  from './app.component';
import {DialogComponent}  from './section/dialog.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        DialogModule,
        ButtonModule,
        StepsModule,
        CommonModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        DialogComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
