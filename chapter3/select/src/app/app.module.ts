import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {MultiSelectModule} from 'primeng/components/multiselect/multiselect';
import {GrowlModule} from 'primeng/components/growl/growl';
import {StepsModule} from 'primeng/components/steps/steps';

import {AppComponent}  from './app.component';
import {SelectComponent}  from './section/select.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        DropdownModule,
        MultiSelectModule,
        GrowlModule,
        StepsModule
    ],
    declarations: [
        AppComponent,
        SelectComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
