import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import {AppComponent} from './app.component';
import {MainComponent}  from './main/main.component';
import {routes} from './app-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {SvgDrawingComponent} from './drawing/svg/svg-drawing.component';
import {CanvasDrawingComponent} from './drawing/canvas/canvas-drawing.component';
import {PanelComponent} from './panel/panel.component';
import {PaletteComponent} from './panel/palette/palette.component';
import {PropertiesComponent} from './panel/properties/properties.component';
import {ShapesComponent} from './panel/shapes/shapes.component';
import {ToolbarComponent} from './panel/toolbar/toolbar.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routes
    ],
    declarations: [
        AppComponent,
        MainComponent,
        PanelComponent,
        ToolbarComponent,
        PaletteComponent,
        PropertiesComponent,
        ShapesComponent,
        LayoutComponent,
        SvgDrawingComponent,
        CanvasDrawingComponent
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
