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
import { WebStorageModule, BROWSER_STORAGE_PROVIDERS } from 'h5webstorage';

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
        FormsModule,
        WebStorageModule
    ],
    providers: [
        SeriesService,
        AuthService,
        Title,
        BROWSER_STORAGE_PROVIDERS
    ]
})
export class MyshowsModule {

}
