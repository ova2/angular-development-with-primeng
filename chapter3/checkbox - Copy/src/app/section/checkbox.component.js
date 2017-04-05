"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CheckboxComponent = (function () {
    function CheckboxComponent() {
        this.msgs = [];
        this.selectedVersions = ['AngularJS1.0', 'AngularV4.0'];
        this.status = true;
        this.activeIndex = 0;
    }
    CheckboxComponent.prototype.onChange = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Checkbox status is changed' });
    };
    CheckboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            {
                label: 'Single selection',
                command: function (event) {
                    _this.activeIndex = 0;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Single checkbox', detail: event.item.label });
                }
            },
            {
                label: 'Multiple selection',
                command: function (event) {
                    _this.activeIndex = 1;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Multiple checkbox', detail: event.item.label });
                }
            },
            {
                label: 'TriState',
                command: function (event) {
                    _this.activeIndex = 2;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'MaskFormat Options', detail: event.item.label });
                }
            },
            {
                label: 'Object display',
                command: function (event) {
                    _this.activeIndex = 3;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'SlotChar', detail: event.item.label });
                }
            },
            {
                label: 'Templating',
                command: function (event) {
                    _this.activeIndex = 4;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Optional Mask values', detail: event.item.label });
                }
            },
            {
                label: 'ReadOnly/Disabled',
                command: function (event) {
                    _this.activeIndex = 5;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'ReadOnly', detail: event.item.label });
                }
            },
        ];
    };
    CheckboxComponent = __decorate([
        core_1.Component({
            selector: 'section',
            templateUrl: 'checkbox.component.html'
        })
    ], CheckboxComponent);
    return CheckboxComponent;
}());
exports.CheckboxComponent = CheckboxComponent;
