import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {OrderListComponent} from './section/orderlist.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter5/orderlist', pathMatch: 'full'},
    {path: 'chapter5/orderlist', component: OrderListComponent},
    {path: '**', redirectTo: 'chapter5/orderlist'}
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
