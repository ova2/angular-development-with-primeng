import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

// import needed PrimeNG modules here
import {ToolbarModule} from 'primeng/components/toolbar/toolbar';
import {ButtonModule} from 'primeng/components/button/button';
import {TabMenuModule} from 'primeng/components/tabmenu/tabmenu';
import {PanelModule} from 'primeng/components/panel/panel';

import {AppComponent} from './app.component';
import {MainComponent}  from './main/main.component';
import {routes} from './app-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {SvgDrawingComponent} from './drawing/svg/svg-drawing.component';
import {CanvasDrawingComponent} from './drawing/canvas/canvas-drawing.component';
import {PaletteComponent} from './panel/palette/palette.component';
import {PropertiesComponent} from './panel/properties/properties.component';
import {ShapesComponent} from './panel/shapes/shapes.component';
import {ToolbarComponent} from './panel/toolbar/toolbar.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        routes,
        ToolbarModule,
        ButtonModule,
        TabMenuModule,
        PanelModule
    ],
    declarations: [
        AppComponent,
        MainComponent,
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
