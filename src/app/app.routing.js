"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var index_2 = require('./guide/index');
var index_3 = require('./todolist/index');
var series_detail_routes_1 = require('./series/series-detail/series-detail.routes');
var appRoutes = index_1.HomeRoutes.concat(index_2.GuideRoutes, index_3.TodolistRoutes, series_detail_routes_1.SeriesDetailRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map