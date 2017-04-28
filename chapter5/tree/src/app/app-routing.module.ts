import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TreeComponent} from './section/tree.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter5/tree', pathMatch: 'full'},
    {path: 'chapter5/tree', component: TreeComponent},
    {path: '**', redirectTo: 'chapter5/tree'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
