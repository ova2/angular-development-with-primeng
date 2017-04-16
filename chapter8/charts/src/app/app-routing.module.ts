import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ChartComponent} from './section/charts.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter8/charts', pathMatch: 'full'},
    {path: 'chapter8/charts', component: ChartComponent},
    {path: '**', redirectTo: 'chapter8/charts'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
