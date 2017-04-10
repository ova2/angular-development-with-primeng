import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {SvgDrawingComponent} from './drawing/svg/svg-drawing.component';
import {CanvasDrawingComponent} from './drawing/canvas/canvas-drawing.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'svg',
        component: SvgDrawingComponent
    },
    {
        path: 'canvas',
        component: CanvasDrawingComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
