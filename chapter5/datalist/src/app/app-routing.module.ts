import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DataListComponent} from './section/datalist.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter5/datalist', pathMatch: 'full'},
    {path: 'chapter5/datalist', component: DataListComponent},
    {path: '**', redirectTo: 'chapter5/datalist'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
