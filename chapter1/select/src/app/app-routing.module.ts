import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SelectComponent} from './section/select.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: SelectComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
