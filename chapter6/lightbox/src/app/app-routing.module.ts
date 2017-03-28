import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {InputMaskComponent} from './section/inputmask.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter6/lightbox', pathMatch: 'full'},
    {path: 'chapter6/lightbox', component: InputMaskComponent},
    {path: '**', redirectTo: 'chapter6/lightbox'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
