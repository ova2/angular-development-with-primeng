import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ToggleButtonComponent} from './section/togglebutton.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter4/toggle-button', pathMatch: 'full'},
    {path: 'chapter4/toggle-button', component: ToggleButtonComponent},
    {path: '**', redirectTo: 'chapter4/toggle-button'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
