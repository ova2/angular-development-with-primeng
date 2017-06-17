import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ColorPickerComponent} from './section/colorpicker.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter9/colorpicker', pathMatch: 'full'},
    {path: 'chapter9/colorpicker', component: ColorPickerComponent},
    { path: '**', redirectTo: 'chapter9/colorpicker' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
