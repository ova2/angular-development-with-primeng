import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {FieldsetComponent} from './section/fieldset.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter4/fieldset', pathMatch: 'full'},
    {path: 'chapter4/fieldset', component: FieldsetComponent},
    {path: '**', redirectTo: 'chapter4/fieldset'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
