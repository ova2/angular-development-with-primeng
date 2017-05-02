import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DataGridComponent} from './section/datagrid.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter5/datagrid', pathMatch: 'full'},
    {path: 'chapter5/datagrid', component: DataGridComponent},
    {path: '**', redirectTo: 'chapter5/datagrid'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
