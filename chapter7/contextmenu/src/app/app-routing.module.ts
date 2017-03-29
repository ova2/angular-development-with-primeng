import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ContextMenuComponent} from './section/contextmenu.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter7/contextmenu', pathMatch: 'full'},
    {path: 'chapter7/contextmenu', component: ContextMenuComponent},
    {path: '**', redirectTo: 'chapter7/contextmenu'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
