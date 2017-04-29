import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ScheduleComponent} from './section/schedule.component';

const router: Routes = [
    {path: '', redirectTo: 'chapter5/schedule', pathMatch: 'full'},
    {path: 'chapter5/schedule', component: ScheduleComponent},
    {path: '**', redirectTo: 'chapter5/schedule'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
