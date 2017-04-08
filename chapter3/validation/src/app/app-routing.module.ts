import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ValidationComponent} from './section/validation.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter3/validation', pathMatch: 'full'},
    {path: 'chapter3/validation', component: ValidationComponent},
    {path: '**', redirectTo: 'chapter3/validation'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
