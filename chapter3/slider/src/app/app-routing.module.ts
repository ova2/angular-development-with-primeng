import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SliderComponent} from './section/slider.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter3/slider', pathMatch: 'full'},
    {path: 'chapter3/slider', component: SliderComponent},
    {path: '**', redirectTo: 'chapter3/slider'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
