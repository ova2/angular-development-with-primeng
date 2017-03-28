import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TieredMenuComponent} from './section/tieredmenu.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter7/tieredmenu', pathMatch: 'full'},
    {path: 'chapter7/tieredmenu', component: TieredMenuComponent},
    {path: '**', redirectTo: 'chapter7/tieredmenu'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
