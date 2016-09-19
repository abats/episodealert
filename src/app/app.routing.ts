import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { GuideRoutes } from './guide/index';
import { TodolistRoutes } from './todolist/index';
import { SeriesDetailRoutes } from './series/series-detail/series-detail.routes';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...GuideRoutes,
    ...TodolistRoutes,
    ...SeriesDetailRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
