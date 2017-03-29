import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SpinnerComponent} from './section/spinner.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter3/spinner', pathMatch: 'full'},
    {path: 'chapter3/spinner', component: SpinnerComponent},
    {path: '**', redirectTo: 'chapter3/spinner'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
