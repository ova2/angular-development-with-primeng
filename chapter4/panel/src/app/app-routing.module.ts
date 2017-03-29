import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PanelComponent} from './section/panel.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter4/panel', pathMatch: 'full'},
    {path: 'chapter4/panel', component: PanelComponent},
    {path: '**', redirectTo: 'chapter4/panel'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
