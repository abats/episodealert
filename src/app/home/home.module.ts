import { NgModule } from '@angular/core';
import { HomeComponent } from './index';
import { SharedModule } from '../shared/shared.module';
import { SeriesService } from '../shared/services/series.service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../shared/services/authentication.service';
import { Title } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        SharedModule,
        HttpModule
    ],
    providers: [
        SeriesService,
        AuthService,
        Title
    ]
})
export class HomeModule {
}
