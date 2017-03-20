import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ChipsComponent} from './section/chips.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: ChipsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
