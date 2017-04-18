import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PickListComponent} from './section/picklist.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter5/picklist', pathMatch: 'full'},
    {path: 'chapter5/picklist', component: PickListComponent},
    {path: '**', redirectTo: 'chapter5/picklist'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
