import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DialogComponent} from './section/dialog.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter6/dialog', pathMatch: 'full'},
    {path: 'chapter6/dialog', component: DialogComponent},
    {path: '**', redirectTo: 'chapter6/dialog'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
