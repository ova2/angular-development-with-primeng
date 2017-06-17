import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {OrgChartComponent} from './section/orgchart.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter9/orgchart', pathMatch: 'full'},
    {path: 'chapter9/orgchart', component: OrgChartComponent},
    { path: '**', redirectTo: 'chapter9/orgchart' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
