import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ButtonComponent} from './section/button.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter4/button', pathMatch: 'full'},
    {path: 'chapter4/button', component: ButtonComponent},
    {path: '**', redirectTo: 'chapter4/button'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
