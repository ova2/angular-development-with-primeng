import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AutoCompleteComponent} from './section/autocomplete.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: AutoCompleteComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
