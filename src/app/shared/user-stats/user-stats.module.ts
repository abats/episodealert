import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { TabsModule } from 'ng2-bootstrap/components/tabs';
import { UserStatsComponent } from './user-stats.component';

@NgModule({
    declarations: [
        UserStatsComponent
    ],
    exports: [
        UserStatsComponent
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
export class UserStatsModule {

}
