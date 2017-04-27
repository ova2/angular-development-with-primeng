import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DataTableComponent} from './section/datatable.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter5/datatable', pathMatch: 'full'},
    {path: 'chapter5/datatable', component: DataTableComponent},
    {path: '**', redirectTo: 'chapter5/datatable'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
