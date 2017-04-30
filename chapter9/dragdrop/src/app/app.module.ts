import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {DragDropModule} from 'primeng/components/dragdrop/dragdrop';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DataGridModule} from 'primeng/components/datagrid/datagrid';
import {PanelModule} from 'primeng/components/panel/panel';

import {AppComponent}  from './app.component';
import {DragDropComponent}  from './section/dragdrop.component';
import {routes} from './app-routing.module';
import {DocumentService} from './section/service/document.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        routes,
        FormsModule,
        HttpModule,
        DragDropModule,
        DataTableModule,
        DataGridModule,
        PanelModule
    ],
    declarations: [
        AppComponent,
        DragDropComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, DocumentService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
