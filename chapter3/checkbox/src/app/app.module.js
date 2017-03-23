"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
// import needed PrimeNG modules here
var checkbox_1 = require('primeng/components/checkbox/checkbox');
var tristatecheckbox_1 = require('primeng/components/tristatecheckbox/tristatecheckbox');
var growl_1 = require('primeng/components/growl/growl');
var app_component_1 = require('./app.component');
var checkbox_component_1 = require('./section/checkbox.component');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.routes,
                forms_1.FormsModule,
                checkbox_1.CheckboxModule,
                tristatecheckbox_1.TriStateCheckboxModule,
                growl_1.GrowlModule
            ],
            declarations: [
                app_component_1.AppComponent,
                checkbox_component_1.CheckboxComponent
            ],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
