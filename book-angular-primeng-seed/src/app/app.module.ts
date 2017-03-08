import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

import {AppComponent}  from './app.component';
import {SectionModule} from './section/section.module';
import {routes} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        SectionModule,
        routes
    ],
    declarations: [AppComponent],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
