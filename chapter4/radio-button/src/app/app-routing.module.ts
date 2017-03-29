import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RadioButtonComponent} from './section/radio.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter4/radio-button', pathMatch: 'full'},
    {path: 'chapter4/radio-button', component: RadioButtonComponent},
    {path: '**', redirectTo: 'chapter4/radio-button'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
