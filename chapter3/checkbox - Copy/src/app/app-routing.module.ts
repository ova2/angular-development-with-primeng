import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CheckboxComponent} from './section/checkbox.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter3/checkbox', pathMatch: 'full'},
    {path: 'chapter3/checkbox', component: CheckboxComponent},
    {path: '**', redirectTo: 'chapter3/checkbox'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
