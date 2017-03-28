import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {BlockUIComponent} from './section/blockui.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter9/blockui', pathMatch: 'full'},
    {path: 'chapter9/blockui', component: BlockUIComponent},
    { path: '**', redirectTo: 'chapter9/blockui' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
