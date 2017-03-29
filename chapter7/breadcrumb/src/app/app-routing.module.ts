import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {BreadcrumbComponent} from './section/breadcrumb.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter7/breadcrumb', pathMatch: 'full'},
    {path: 'chapter7/breadcrumb', component: BreadcrumbComponent},
    {path: '**', redirectTo: 'chapter7/breadcrumb'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
