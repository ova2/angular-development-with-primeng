import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PanelComponent} from './section/panel.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: PanelComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
