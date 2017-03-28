import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {GMapComponent} from './section/gmap.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter8/gmap', pathMatch: 'full'},
    {path: 'chapter8/gmap', component: GMapComponent},
    {path: '**', redirectTo: 'chapter8/gmap'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
