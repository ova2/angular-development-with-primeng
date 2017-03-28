import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AutoCompleteComponent} from './section/autocomplete.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter3/autocomplete', pathMatch: 'full'},
    {path: 'chapter3/autocomplete', component: AutoCompleteComponent},
    {path: '**', redirectTo: 'chapter3/autocomplete'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
