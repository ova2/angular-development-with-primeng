import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {ScheduleModule} from 'primeng/components/schedule/schedule';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
import {GrowlModule} from 'primeng/components/growl/growl';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/components/button/button';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {AppComponent}  from './app.component';
import {ScheduleComponent}  from './section/schedule.component';
import {EventService} from './section/service/event.service';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        ScheduleModule,
        RadioButtonModule,
        DialogModule,
        InputTextModule,
        CalendarModule,
        CheckboxModule,
        ButtonModule,
        WizardModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        ScheduleComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},EventService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
