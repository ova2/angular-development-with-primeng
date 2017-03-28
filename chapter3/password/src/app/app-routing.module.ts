import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PasswordComponent} from './section/password.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter3/password', pathMatch: 'full'},
    {path: 'chapter3/password', component: PasswordComponent},
    {path: '**', redirectTo: 'chapter3/password'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
