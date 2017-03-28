import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SelectComponent} from './section/select.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter3/select', pathMatch: 'full'},
    {path: 'chapter3/select', component: SelectComponent},
    {path: '**', redirectTo: 'chapter3/select'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
