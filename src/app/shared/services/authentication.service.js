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
var user_1 = require('../model/user');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = index_1.CONSTANTS.MAIN.APP.API_BASE_URL;
        this.authCheckUrl = this.baseUrl + '/auth/check';
        this.user = new user_1.User;
    }
    AuthService.prototype.getTestValue = function () {
        return this.testValue;
    };
    AuthService.prototype.setTestValue = function (newValue) {
        this.testValue = newValue;
    };
    AuthService.prototype.getUserName = function () {
        return this.user.name;
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('authenticated');
    };
    AuthService.prototype.login = function (response) {
        this.user.name = response.accountname;
        console.log(this.user);
        localStorage.setItem('authenticated', 'true');
    };
    AuthService.prototype.getAuth = function () {
        var _this = this;
        return this.http.get(this.authCheckUrl)
            .toPromise()
            .then(function (response) {
            _this.login(response.json());
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=authentication.service.js.map