import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MegaMenuComponent} from './section/inputmask.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter7/megamenu', pathMatch: 'full'},
    {path: 'chapter7/megamenu', component: MegaMenuComponent},
    {path: '**', redirectTo: 'chapter7/megamenu'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
