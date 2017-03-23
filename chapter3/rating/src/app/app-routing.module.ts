import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RatingComponent} from './section/rating.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: RatingComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
