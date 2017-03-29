import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MessagesComponent} from './section/messages.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter6/messages', pathMatch: 'full'},
    {path: 'chapter6/messages', component: MessagesComponent},
    {path: '**', redirectTo: 'chapter6/messages'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
