import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {ButtonModule} from 'primeng/components/button/button';
import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
import {GrowlModule} from 'primeng/components/growl/growl';

import {AppComponent}  from './app.component';
import {InputMaskComponent}  from './section/inputmask.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        ButtonModule,
        InputMaskModule,
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
