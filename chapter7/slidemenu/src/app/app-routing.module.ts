import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SlideMenuComponent} from './section/slidemenu.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter7/slidemenu', pathMatch: 'full'},
    {path: 'chapter7/slidemenu', component: SlideMenuComponent},
    {path: '**', redirectTo: 'chapter7/slidemenu'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
