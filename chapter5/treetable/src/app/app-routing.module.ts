import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TreeTableComponent} from './section/treetable.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter5/treetable', pathMatch: 'full'},
    {path: 'chapter5/treetable', component: TreeTableComponent},
    {path: '**', redirectTo: 'chapter5/treetable'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
