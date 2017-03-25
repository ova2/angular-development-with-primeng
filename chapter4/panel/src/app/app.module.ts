import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {PanelModule} from 'primeng/components/panel/panel';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SplitButtonModule} from 'primeng/components/splitbutton/splitbutton';

import {AppComponent}  from './app.component';
import {PanelComponent}  from './section/panel.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        PanelModule,
        SplitButtonModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        PanelComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
