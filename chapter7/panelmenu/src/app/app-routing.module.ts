import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PanelMenuComponent} from './section/panelmenu.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter7/panelmenu', pathMatch: 'full'},
    {path: 'chapter7/panelmenu', component: PanelMenuComponent},
    {path: '**', redirectTo: 'chapter7/panelmenu'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
