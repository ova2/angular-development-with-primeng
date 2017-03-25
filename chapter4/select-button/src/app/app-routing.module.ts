import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SelectButtonComponent} from './section/selectbutton.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: SelectButtonComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
