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
var series_service_1 = require('../shared/services/series.service');
var authentication_service_1 = require('../shared/services/authentication.service');
var platform_browser_1 = require('@angular/platform-browser');
var GuideComponent = (function () {
    function GuideComponent(seriesService, authService, titleService) {
        this.seriesService = seriesService;
        this.authService = authService;
        this.titleService = titleService;
        titleService.setTitle('Episode Alert - Guide');
    }
    GuideComponent.prototype.getTrendingSeries = function () {
        var _this = this;
        this.seriesService.getTrendingSeries().then(function (series) {
            _this.trendingSeries = series;
        });
    };
    GuideComponent.prototype.getTopSeries = function () {
        var _this = this;
        this.seriesService.getTopSeries().then(function (series) {
            _this.topSeries = series;
        });
    };
    GuideComponent.prototype.getSeriesGenres = function () {
        this.seriesGenres = this.seriesService.getSeriesGenres();
    };
    GuideComponent.prototype.ngOnInit = function () {
        this.getTrendingSeries();
        this.getTopSeries();
        this.getSeriesGenres();
        console.log(this.authService.isLoggedIn());
        if (!this.authService.isLoggedIn()) {
            this.authService.getAuth()
                .then(function (authInfo) {
                // console.log(authInfo);
            });
        }
    };
    GuideComponent = __decorate([
        core_1.Component({
            selector: 'as-guide',
            templateUrl: 'app/guide/guide.html',
            styleUrls: [
                'app/guide/guide.css'
            ]
        }), 
        __metadata('design:paramtypes', [series_service_1.SeriesService, authentication_service_1.AuthService, platform_browser_1.Title])
    ], GuideComponent);
    return GuideComponent;
}());
exports.GuideComponent = GuideComponent;
//# sourceMappingURL=guide.component.js.map