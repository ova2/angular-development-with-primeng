import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {FileUploadComponent} from './section/fileupload.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter9/fileupload', pathMatch: 'full'},
    {path: 'chapter9/fileupload', component: FileUploadComponent},
    {path: '**', redirectTo: 'chapter9/fileupload' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
