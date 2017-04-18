import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {TreeTableModule} from 'primeng/components/treetable/treetable';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
import {GrowlModule} from 'primeng/components/growl/growl';

import {AppComponent}  from './app.component';
import {TreeTableComponent}  from './section/treetable.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        TreeTableModule,
        RadioButtonModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        TreeTableComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
