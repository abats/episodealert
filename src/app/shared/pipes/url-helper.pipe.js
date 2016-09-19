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
var UrlPipe = (function () {
    function UrlPipe() {
        this.imageUrl = 'assets/img/missing.png';
        this.returnPoster = '';
    }
    // constructor() { }
    UrlPipe.prototype.transform = function (poster, unique_name, size) {
        if (poster) {
            if (size) {
                this.returnPoster = poster.split('.');
                this.returnPoster = this.returnPoster[0] + '_' + size + '.jpg';
                this.imageUrl = 'assets/img/poster/' + unique_name.substring(0, 2) + '/' + this.returnPoster;
            }
            else {
                this.imageUrl = 'assets/img/poster/' + unique_name.substring(0, 2) + '/' + poster;
            }
        }
        return this.imageUrl;
    };
    UrlPipe = __decorate([
        core_1.Pipe({
            name: 'asUrlPipe',
            pure: true
        }), 
        __metadata('design:paramtypes', [])
    ], UrlPipe);
    return UrlPipe;
}());
exports.UrlPipe = UrlPipe;
//# sourceMappingURL=url-helper.pipe.js.map