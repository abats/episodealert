import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'todolist',
        loadChildren: 'app/todolist/todolist.module#TodolistModule'
    },
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'guide',
        loadChildren: 'app/guide/guide.module#GuideModule'
    },
    {
        path: 'myshows',
        loadChildren: 'app/myshows/myshows.module#MyshowsModule'
    },
    {
        path: 'series/:uniqueName',
        loadChildren: 'app/series/series-detail/series-detail.module#SeriesDetailModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {

}
