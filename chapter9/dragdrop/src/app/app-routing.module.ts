import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DragDropComponent} from './section/dragdrop.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter9/dragdrop', pathMatch: 'full'},
    {path: 'chapter9/dragdrop', component: DragDropComponent},
    { path: '**', redirectTo: 'chapter9/dragdrop' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
