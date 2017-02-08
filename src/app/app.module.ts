import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule, FooterModule } from './shared';
import { HomeModule } from './home/home.module';
import { GuideModule } from './guide/guide.module';
import { MyshowsModule } from './myshows/myshows.module';
import { TodolistModule } from './todolist/todolist.module';
import { HttpModule } from '@angular/http';
import { SeriesDetailModule } from './series/series-detail/series-detail.module';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NavbarModule,
        FooterModule,
        HomeModule,
        GuideModule,
        MyshowsModule,
        TodolistModule,
        SeriesDetailModule,
        UserModule,
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
