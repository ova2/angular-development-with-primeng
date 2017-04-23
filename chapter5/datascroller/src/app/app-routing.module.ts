import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DataScrollerComponent} from './section/datascroller.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter5/datascroller', pathMatch: 'full'},
    {path: 'chapter5/datascroller', component: DataScrollerComponent},
    {path: '**', redirectTo: 'chapter5/datascroller'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
