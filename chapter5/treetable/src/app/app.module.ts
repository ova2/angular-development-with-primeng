import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {TreeTableModule} from 'primeng/components/treetable/treetable';
import {ButtonModule} from 'primeng/components/button/button';
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {TreeTableComponent}  from './section/treetable.component';
import {TreeNodeService} from './section/service/treenode.service';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        TreeTableModule,
        ButtonModule,
        ContextMenuModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        TreeTableComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},TreeNodeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
