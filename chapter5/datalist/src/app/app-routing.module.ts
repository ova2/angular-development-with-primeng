import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DataListComponent} from './section/datalist.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: DataListComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
