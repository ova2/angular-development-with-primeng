import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {GrowlComponent} from './section/growl.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter6/growl', pathMatch: 'full'},
    {path: 'chapter6/growl', component: GrowlComponent},
    {path: '**', redirectTo: 'chapter6/growl'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
