import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {StepsComponent} from './section/steps.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter7/steps', pathMatch: 'full'},
    {path: 'chapter7/steps', component: StepsComponent},
    {path: '**', redirectTo: 'chapter7/steps'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
