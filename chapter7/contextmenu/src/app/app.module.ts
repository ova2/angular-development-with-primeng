import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { HttpModule } from '@angular/http';

// import needed PrimeNG modules here
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {ContextMenuComponent}  from './section/contextmenu.component';
import {EmployeeService} from './section/service/employeeService';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        ContextMenuModule,
        DataTableModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        ContextMenuComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
