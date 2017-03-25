import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {FieldsetComponent} from './section/fieldset.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: FieldsetComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
