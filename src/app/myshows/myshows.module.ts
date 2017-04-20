import { NgModule } from '@angular/core';
import { MyshowsComponent } from './myshows.component';
import { SharedModule } from '../shared/shared.module';
import { SeriesService } from '../shared/services/series.service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../shared/services/authentication.service';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { OrderDisplayComponent } from './orderDisplay/orderdisplay.component';
import { WebStorageModule, BROWSER_STORAGE_PROVIDERS } from 'h5webstorage';
import { MyshowsRoutingModule } from './myshows.routes';

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
        HttpModule,
        FormsModule,
        WebStorageModule,
        MyshowsRoutingModule
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
