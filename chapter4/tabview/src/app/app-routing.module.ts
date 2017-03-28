import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TabViewComponent} from './section/tabview.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter4/tabview', pathMatch: 'full'},
    {path: 'chapter4/tabview', component: TabViewComponent},
    {path: '**', redirectTo: 'chapter4/tabview'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
