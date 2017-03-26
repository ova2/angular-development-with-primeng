import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SectionComponent} from './section/section.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter/section', pathMatch: 'full'},
    {path: 'chapter/section', component: SectionComponent},
    {path: '**', redirectTo: 'chapter/section'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
