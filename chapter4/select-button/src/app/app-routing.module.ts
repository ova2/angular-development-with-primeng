import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SelectButtonComponent} from './section/selectbutton.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter4/select-button', pathMatch: 'full'},
    {path: 'chapter4/select-button', component: SelectButtonComponent},
    {path: '**', redirectTo: 'chapter4/select-button'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
