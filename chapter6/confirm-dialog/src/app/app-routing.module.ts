import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ConfirmDialogComponent} from './section/confirmdialog.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter6/confirm-dialog', pathMatch: 'full'},
    {path: 'chapter6/confirm-dialog', component: ConfirmDialogComponent},
    {path: '**', redirectTo: 'chapter6/confirm-dialog'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
