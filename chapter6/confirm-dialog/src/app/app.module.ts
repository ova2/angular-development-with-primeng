import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import {ConfirmationService} from 'primeng/components/common/api';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/components/growl/growl';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {ConfirmDialogComponent}  from './section/confirmdialog.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        BrowserAnimationsModule,
        ConfirmDialogModule,
        ButtonModule,
        CommonModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        ConfirmDialogComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, ConfirmationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
