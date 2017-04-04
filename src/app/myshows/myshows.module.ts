import { NgModule } from '@angular/core';
import { MyshowsComponent } from './index';
import { SharedModule } from '../shared/shared.module';
import { SeriesService } from '../shared/services/series.service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../shared/services/authentication.service';
import { Title, BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { OrderDisplayComponent } from './orderDisplay/orderdisplay.component';


@NgModule({
    declarations: [
        OrderDisplayComponent,
        MyshowsComponent,
    ],
    exports: [
        MyshowsComponent
    ],
    imports: [
        RouterModule,
        SharedModule,
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    providers: [
        SeriesService,
        AuthService,
        Title
    ]
})
export class MyshowsModule {

}
