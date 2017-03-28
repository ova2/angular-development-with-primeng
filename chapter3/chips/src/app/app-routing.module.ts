import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ChipsComponent} from './section/chips.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter3/chips', pathMatch: 'full'},
    {path: 'chapter3/chips', component: ChipsComponent},
    {path: '**', redirectTo: 'chapter3/chips'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
