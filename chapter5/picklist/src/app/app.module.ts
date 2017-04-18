import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {PickListModule} from 'primeng/components/picklist/picklist';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
import {GrowlModule} from 'primeng/components/growl/growl';

import {AppComponent}  from './app.component';
import {PickListComponent}  from './section/picklist.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        PickListModule,
        RadioButtonModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        PickListComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
