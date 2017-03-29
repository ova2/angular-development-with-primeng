import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {GalleriaComponent} from './section/inputmask.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter9/galleria', pathMatch: 'full'},
    {path: 'chapter9/galleria', component: GalleriaComponent},
    {path: '**', redirectTo: 'chapter9/galleria' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
