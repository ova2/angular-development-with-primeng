import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SliderComponent} from './section/slider.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: SliderComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
