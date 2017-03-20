import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {EditorComponent} from './section/editor.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: EditorComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
