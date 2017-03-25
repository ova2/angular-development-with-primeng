import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ButtonComponent} from './section/button.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: ButtonComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
