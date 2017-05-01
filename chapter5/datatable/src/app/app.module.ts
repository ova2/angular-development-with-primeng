import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import needed PrimeNG modules here
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {ButtonModule} from 'primeng/components/button/button';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {MultiSelectModule} from 'primeng/components/multiselect/multiselect';
import {SliderModule} from 'primeng/components/slider/slider';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {DataTableComponent}  from './section/datatable.component';
import {BrowserService} from './section/service/browser.service';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        DataTableModule,
        ButtonModule,
        DialogModule,
        ContextMenuModule,
        SliderModule,
        DropdownModule,
        MultiSelectModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        DataTableComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},BrowserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
