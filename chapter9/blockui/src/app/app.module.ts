import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {BlockUIModule} from 'primeng/components/blockui/blockui';

import {AppComponent}  from './app.component';
import {BlockUIComponent}  from './section/blockui.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        routes,
        FormsModule,
        BlockUIModule
    ],
    declarations: [
        AppComponent,
        BlockUIComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
