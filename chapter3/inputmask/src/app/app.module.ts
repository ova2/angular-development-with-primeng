import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
import {StepsModule} from 'primeng/components/steps/steps';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
import {GrowlModule} from 'primeng/components/growl/growl';

import {AppComponent}  from './app.component';
import {InputMaskComponent}  from './section/inputmask.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        InputMaskModule,
        StepsModule,
        RadioButtonModule,
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
