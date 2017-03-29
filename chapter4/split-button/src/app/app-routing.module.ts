import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SplitButtonComponent} from './section/splitbutton.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter4/split-button', pathMatch: 'full'},
    {path: 'chapter4/split-button', component: SplitButtonComponent},
    {path: '**', redirectTo: 'chapter4/split-button'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
