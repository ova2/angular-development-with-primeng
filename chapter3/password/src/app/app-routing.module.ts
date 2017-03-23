import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PasswordComponent} from './section/password.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: PasswordComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
