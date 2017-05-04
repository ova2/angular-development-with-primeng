import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// import needed PrimeNG modules here
import {MessagesModule} from 'primeng/components/messages/messages';

import {AppComponent} from './app.component';
import {MessageComponent} from './shared/message/message.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MessagesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
