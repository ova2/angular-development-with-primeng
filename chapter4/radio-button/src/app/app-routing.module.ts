import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RadioButtonComponent} from './section/radio.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: RadioButtonComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
