import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {TreeModule} from 'primeng/components/tree/tree';
import {TreeDragDropService} from 'primeng/components/common/api';
import {ButtonModule} from 'primeng/components/button/button';
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {TreeNodeService} from './section/service/treenode.service';
import {TreeComponent}  from './section/tree.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        TreeModule,
        ButtonModule,
        ContextMenuModule,
        GrowlModule,
        WizardModule
    ],
    declarations: [
        AppComponent,
        TreeComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, TreeDragDropService, TreeNodeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
