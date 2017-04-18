import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {DataScrollerModule} from 'primeng/components/datascroller/datascroller';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
import {GrowlModule} from 'primeng/components/growl/growl';

import {AppComponent}  from './app.component';
import {DataScrollerComponent}  from './section/datascroller.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        DataScrollerModule,
        RadioButtonModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        DataScrollerComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
