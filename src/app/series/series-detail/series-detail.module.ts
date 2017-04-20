import { NgModule } from '@angular/core';
import { SeriesDetailComponent } from './series-detail.component';
import { HttpModule } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { SeriesDetailRoutingModule } from './series-detail.routes';
import { TabsModule } from 'ng2-bootstrap';

@NgModule({
    declarations: [
        SeriesDetailComponent
    ],
    exports: [
        SeriesDetailComponent
    ],
    imports: [
        HttpModule,
        SharedModule,
        SeriesDetailRoutingModule,
        TabsModule.forRoot()
    ],
    providers: [
        Title
    ]
})
export class SeriesDetailModule {

}
