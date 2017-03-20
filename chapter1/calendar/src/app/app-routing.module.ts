import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {InputMaskComponent} from './section/inputmask.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: InputMaskComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
