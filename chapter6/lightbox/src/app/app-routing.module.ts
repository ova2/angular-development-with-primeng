import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LightboxComponent} from './section/lightbox.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter6/lightbox', pathMatch: 'full'},
    {path: 'chapter6/lightbox', component: LightboxComponent},
    {path: '**', redirectTo: 'chapter6/lightbox'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
