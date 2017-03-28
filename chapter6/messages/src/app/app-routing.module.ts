import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {InputMaskComponent} from './section/inputmask.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter6/messages', pathMatch: 'full'},
    {path: 'chapter6/messages', component: InputMaskComponent},
    {path: '**', redirectTo: 'chapter6/messages'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
