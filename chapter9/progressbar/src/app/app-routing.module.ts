import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ProgressBarComponent} from './section/progressbar.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter/progressbar', pathMatch: 'full'},
    {path: 'chapter/progressbar', component: ProgressBarComponent},
    {path: '**', redirectTo: 'chapter/progressbar'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
