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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var index_1 = require('../constant/index');
var SeriesService = (function () {
    function SeriesService(http) {
        this.http = http;
        this.baseUrl = index_1.CONSTANTS.MAIN.APP.API_BASE_URL;
        this.topSeriesUrl = this.baseUrl + 'series/top';
        this.trendingSeriesUrl = this.baseUrl + 'series/trending';
        this.profileUrl = this.baseUrl + 'profile/following';
        this.singleSeriesUrl = this.baseUrl + 'series/';
    }
    SeriesService.prototype.getSingleSeries = function (uniqueName) {
        return this.http.get(this.singleSeriesUrl + uniqueName)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SeriesService.prototype.getTopSeries = function () {
        return this.http.get(this.topSeriesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SeriesService.prototype.getSeriesGenres = function () {
        return [{ 'genre': 'Action' }, { 'genre': 'Adventure' }, { 'genre': 'Animation' }, { 'genre': 'Comedy' },
            { 'genre': 'Children' }, { 'genre': 'Crime' }, { 'genre': 'Drama' }, { 'genre': 'Documentary' },
            { 'genre': 'Fantasy' }, { 'genre': 'Mystery' }, { 'genre': 'Game Show' }, { 'genre': 'Horror' },
            { 'genre': 'News' }, { 'genre': 'Reality' }, { 'genre': 'Science-Fiction' }, { 'genre': 'Soap' },
            { 'genre': 'Sport' }, { 'genre': 'Talk Show' }, { 'genre': 'Western' }, { 'genre': 'Travel' }, { 'genre': 'Romance' }];
    };
    SeriesService.prototype.getTrendingSeries = function () {
        return this.http.get(this.trendingSeriesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SeriesService.prototype.save = function (hero) {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    };
    SeriesService.prototype.delete = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.singleSeriesUrl + "/" + hero.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    SeriesService.prototype.put = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.singleSeriesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    SeriesService.prototype.post = function (hero) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.singleSeriesUrl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    SeriesService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    SeriesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SeriesService);
    return SeriesService;
}());
exports.SeriesService = SeriesService;
//# sourceMappingURL=series.service.js.map