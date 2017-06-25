import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TabMenuComponent} from './section/tabmenu.component';
import {OverviewComponent} from './section/pages/overview.component';
import {DownloadsComponent} from './section/pages/downloads.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter7/tabmenu', pathMatch: 'full'},
    {path: 'chapter7/tabmenu', component: TabMenuComponent},
    {path: 'pages/overview', component: OverviewComponent},
    {path: 'pages/downloads', component: DownloadsComponent},
    {path: '**', redirectTo: 'chapter7/tabmenu'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
