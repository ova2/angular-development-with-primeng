import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MenuComponent} from './section/menu.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter7/menu', pathMatch: 'full'},
    {path: 'chapter7/menu', component: MenuComponent},
    {path: '**', redirectTo: 'chapter7/menu'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
