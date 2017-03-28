import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {GrowlComponent} from './section/growl.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter6/dialog', pathMatch: 'full'},
    {path: 'chapter6/dialog', component: GrowlComponent},
    {path: '**', redirectTo: 'chapter6/dialog'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
