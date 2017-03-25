import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AccordionComponent} from './section/accordion.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: AccordionComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
