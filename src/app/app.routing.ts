import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { GuideRoutes } from './guide/index';
import { TodolistRoutes } from './todolist/index';
import { SeriesDetailRoutes } from './series/series-detail/series-detail.routes';
import { MyshowsRoutes } from './myshows/myshows.routes';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...GuideRoutes,
    ...MyshowsRoutes,
    ...TodolistRoutes,
    ...SeriesDetailRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
