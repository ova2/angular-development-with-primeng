import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {OverlayPanelComponent} from './section/overlaypanel.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter6/overlaypanel', pathMatch: 'full'},
    {path: 'chapter6/overlaypanel', component: OverlayPanelComponent},
    {path: '**', redirectTo: 'chapter6/overlaypanel'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
