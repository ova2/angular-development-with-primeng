import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {ButtonModule} from 'primeng/components/button/button';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';

import {AppComponent}  from './app.component';
import {SectionComponent}  from './section/section.component';
import {CountryService} from './section/service/country.service';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        routes,
        FormsModule,
        ButtonModule,
        InputTextModule
    ],
    declarations: [AppComponent, SectionComponent],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, CountryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
