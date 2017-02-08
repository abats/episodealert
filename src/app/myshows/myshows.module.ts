import { NgModule } from '@angular/core';
import { MyshowsComponent } from './index';
import { SharedModule } from '../shared/shared.module';
import { SeriesService } from '../shared/services/series.service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../shared/services/authentication.service';
import { Title, BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        MyshowsComponent,
    ],
    exports: [
        MyshowsComponent
    ],
    imports: [
        RouterModule,
        SharedModule,
        BrowserModule,
        HttpModule
    ],
    providers: [
        SeriesService,
        AuthService,
        Title
    ]
})
export class MyshowsModule {

}
