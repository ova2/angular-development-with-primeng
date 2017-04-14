import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {OverlayPanelModule} from 'primeng/components/overlaypanel/overlaypanel';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {OverlayPanelComponent}  from './section/overlaypanel.component';
import {ScoreService} from './section/service/scoreservice';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        OverlayPanelModule,
        ButtonModule,
        DataTableModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        OverlayPanelComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},ScoreService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
