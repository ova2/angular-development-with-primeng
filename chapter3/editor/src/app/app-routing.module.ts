import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {EditorComponent} from './section/editor.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter3/editor', pathMatch: 'full'},
    {path: 'chapter3/editor', component: EditorComponent},
    {path: '**', redirectTo: 'chapter3/editor'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
