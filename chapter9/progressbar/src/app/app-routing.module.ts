import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ProgressBarComponent} from './section/progressbar.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: InputMaskComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
