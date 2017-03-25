import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ToggleButtonComponent} from './section/togglebutton.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: ToggleButtonComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
