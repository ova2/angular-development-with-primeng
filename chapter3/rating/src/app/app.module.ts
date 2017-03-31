import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {RatingModule} from 'primeng/components/rating/rating';
import {StepsModule} from 'primeng/components/steps/steps';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';

import {AppComponent}  from './app.component';
import {RatingComponent}  from './section/rating.component';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        routes,
        FormsModule,
        RatingModule,
        StepsModule,
        SelectButtonModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        RatingComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
