import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SpinnerComponent} from './section/spinner.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: SpinnerComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
