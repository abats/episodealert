import { NgModule } from '@angular/core';
import { SeriesDetailComponent } from './index';
import { HttpModule } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { TabsModule } from 'ng2-bootstrap/components/tabs';

@NgModule({
    declarations: [
        SeriesDetailComponent
    ],
    exports: [
        SeriesDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        SharedModule,
        TabsModule
    ],
    providers: [
        Title
    ]
})
export class SeriesDetailModule {

}
