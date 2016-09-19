"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('./index');
var shared_module_1 = require('../shared/shared.module');
var series_service_1 = require('../shared/services/series.service');
var http_1 = require('@angular/http');
var authentication_service_1 = require('../shared/services/authentication.service');
var platform_browser_1 = require('@angular/platform-browser');
var GuideModule = (function () {
    function GuideModule() {
    }
    GuideModule = __decorate([
        core_1.NgModule({
            declarations: [
                index_1.GuideComponent,
            ],
            exports: [
                index_1.GuideComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                http_1.HttpModule
            ],
            providers: [
                series_service_1.SeriesService,
                authentication_service_1.AuthService,
                platform_browser_1.Title
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GuideModule);
    return GuideModule;
}());
exports.GuideModule = GuideModule;
//# sourceMappingURL=guide.module.js.map