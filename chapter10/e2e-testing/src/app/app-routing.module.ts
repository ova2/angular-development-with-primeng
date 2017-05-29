import {Routes, RouterModule} from '@angular/router';
import {FirstViewComponent} from './first-view/first-view.component';
import {SecondViewComponent} from './second-view/second-view.component';
import {UnsavedChangesGuard} from './shared/unsaved-changes.guard';
import {ModuleWithProviders} from '@angular/core';

const router: Routes = [
    {path: '', redirectTo: 'chapter9/first-view', pathMatch: 'full'},
    {path: 'chapter9/first-view', component: FirstViewComponent, canDeactivate: [UnsavedChangesGuard]},
    {path: 'chapter9/second-view', component: SecondViewComponent},
    {path: '**', redirectTo: 'chapter9/first-view'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
