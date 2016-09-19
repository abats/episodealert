import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { GuideModule } from './guide/guide.module';
import { TodolistModule } from './todolist/todolist.module';
import { HttpModule } from '@angular/http';
import { SeriesDetailModule } from './series/series-detail/series-detail.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NavbarModule,
        HomeModule,
        GuideModule,
        TodolistModule,
        SeriesDetailModule,
        routing
    ],
    providers: [
        APP_PROVIDERS,
        appRoutingProviders,
        HttpModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
