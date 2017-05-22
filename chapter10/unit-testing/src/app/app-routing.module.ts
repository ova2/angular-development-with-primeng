import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SectionComponent} from './section/section.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: SectionComponent},
    {path: '**', redirectTo: 'section'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
