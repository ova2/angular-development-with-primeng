import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DataTableCrudComponent} from './section/crud.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter/crud', pathMatch: 'full'},
    {path: 'chapter/crud', component: DataTableCrudComponent},
    {path: '**', redirectTo: 'chapter/crud'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
