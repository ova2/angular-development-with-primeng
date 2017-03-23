import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {EditorComponent} from './section/editor.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter1/editor', pathMatch: 'full'},
    {path: 'chapter1/editor', component: EditorComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
