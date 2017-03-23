import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CalendarComponent} from './section/calendar.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: CalendarComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
