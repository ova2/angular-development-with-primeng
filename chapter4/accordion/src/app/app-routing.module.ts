import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AccordionComponent} from './section/accordion.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter4/accordion', pathMatch: 'full'},
    {path: 'chapter4/accordion', component: AccordionComponent},
    {path: '**', redirectTo: 'chapter4/accordion'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
