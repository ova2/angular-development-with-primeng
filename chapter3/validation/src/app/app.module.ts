import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule,ReactiveFormsModule}    from '@angular/forms';

// import needed PrimeNG modules here
import {PanelModule} from 'primeng/components/panel/panel';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {ButtonModule} from 'primeng/components/button/button';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {TriStateCheckboxModule} from 'primeng/components/tristatecheckbox/tristatecheckbox';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {ValidationComponent}  from './section/validation.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        CheckboxModule,
        TriStateCheckboxModule,
        WizardModule,
        ReactiveFormsModule,
        PanelModule,
        DropdownModule,
        InputTextModule,
        InputMaskModule,
        InputTextareaModule,
        ButtonModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        ValidationComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
