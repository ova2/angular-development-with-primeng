import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CheckboxComponent} from './section/checkbox.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: CheckboxComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
