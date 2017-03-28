import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ToolbarComponent} from './section/toolbar.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter4/toolbar', pathMatch: 'full'},
    {path: 'chapter4/toolbar', component: ToolbarComponent},
    {path: '**', redirectTo: 'chapter4/toolbar'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
