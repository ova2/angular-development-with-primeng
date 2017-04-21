import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {ToolbarModule} from 'primeng/components/toolbar/toolbar';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {SplitButtonModule} from 'primeng/components/splitbutton/splitbutton';
import {ButtonModule} from 'primeng/components/button/button';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {ToolbarComponent}  from './section/toolbar.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        ToolbarModule,
        SplitButtonModule,
        InputTextModule,
        WizardModule,
        ButtonModule
    ],
    declarations: [
        AppComponent,
        ToolbarComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
