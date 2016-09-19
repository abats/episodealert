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
var platform_browser_1 = require('@angular/platform-browser');
var series_service_1 = require('../../shared/services/series.service');
var router_1 = require('@angular/router');
var SeriesDetailComponent = (function () {
    function SeriesDetailComponent(titleService, activatedRoute, seriesService) {
        var _this = this;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.seriesService = seriesService;
        this.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
            { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }
        ];
        titleService.setTitle('Episode Alert - Series detail');
        this.subscription = this.activatedRoute.params.subscribe(function (param) {
            _this.uniqueName = param.uniqueName;
        });
    }
    SeriesDetailComponent.prototype.getSeries = function () {
        var _this = this;
        this.seriesService.getSingleSeries(this.uniqueName).then(function (series) {
            _this.series = series;
            console.log(_this.series.name);
        });
    };
    SeriesDetailComponent.prototype.ngOnInit = function () {
        this.getSeries();
        console.log('init');
    };
    SeriesDetailComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    SeriesDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/series/series-detail/series-detail.html',
            styleUrls: [
                'app/series/series-detail/series-detail.css'
            ]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, router_1.ActivatedRoute, series_service_1.SeriesService])
    ], SeriesDetailComponent);
    return SeriesDetailComponent;
}());
exports.SeriesDetailComponent = SeriesDetailComponent;
//# sourceMappingURL=series-detail.component.js.map