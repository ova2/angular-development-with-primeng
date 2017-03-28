import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {InputMaskComponent} from './section/inputmask.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter3/inputmask', pathMatch: 'full'},
    {path: 'chapter3/inputmask', component: InputMaskComponent},
    {path: '**', redirectTo: 'chapter3/inputmask'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
