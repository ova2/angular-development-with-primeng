import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CalendarComponent} from './section/calendar.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter3/calendar', pathMatch: 'full'},
    {path: 'chapter3/calendar', component: CalendarComponent},
    {path: '**', redirectTo: 'chapter3/calendar'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
