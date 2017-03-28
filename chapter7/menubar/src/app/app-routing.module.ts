import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MenuBarComponent} from './section/menubar.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter7/menubar', pathMatch: 'full'},
    {path: 'chapter7/menubar', component: MenuBarComponent},
    {path: '**', redirectTo: 'chapter7/menubar'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
