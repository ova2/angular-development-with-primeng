import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RatingComponent} from './section/rating.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter3/rating', pathMatch: 'full'},
    {path: 'chapter3/rating', component: RatingComponent},
    {path: '**', redirectTo: 'chapter3/rating'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
