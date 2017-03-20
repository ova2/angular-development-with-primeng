"use strict";
var router_1 = require('@angular/router');
var checkbox_component_1 = require('./section/checkbox.component');
var router = [
    { path: '', redirectTo: 'section', pathMatch: 'full' },
    { path: 'section', component: checkbox_component_1.CheckboxComponent }
];
exports.routes = router_1.RouterModule.forRoot(router);
