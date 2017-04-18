import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {OrderListModule} from 'primeng/components/orderlist/orderlist';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
import {GrowlModule} from 'primeng/components/growl/growl';

import {AppComponent}  from './app.component';
import {OrderListComponent}  from './section/orderlist.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        OrderListModule,
        RadioButtonModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        OrderListComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
