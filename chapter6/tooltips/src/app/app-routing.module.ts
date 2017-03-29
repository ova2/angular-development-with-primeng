import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TooltipComponent} from './section/tooltip.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter6/tooltips', pathMatch: 'full'},
    {path: 'chapter6/tooltips', component: TooltipComponent},
    {path: '**', redirectTo: 'chapter6/tooltips'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
