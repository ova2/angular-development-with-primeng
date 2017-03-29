import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DataTableComponent} from './section/datatable.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: DataTableComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
