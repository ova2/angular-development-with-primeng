import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SectionComponent} from './section/section.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter/crud', pathMatch: 'full'},
    {path: 'chapter/crud', component: SectionComponent},
    {path: '**', redirectTo: 'chapter/crud'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
