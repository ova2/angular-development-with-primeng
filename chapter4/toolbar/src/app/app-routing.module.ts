import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ToolbarComponent} from './section/toolbar.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: ToolbarComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
