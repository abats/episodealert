import { NgModule } from '@angular/core';
import { GuideComponent } from './index';
import { SharedModule } from '../shared/shared.module';
import { SeriesService } from '../shared/services/series.service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../shared/services/authentication.service';
import { Title } from '@angular/platform-browser';


@NgModule({
    declarations: [
        GuideComponent,
    ],
    exports: [
        GuideComponent
    ],
    imports: [
        SharedModule,
        HttpModule
    ],
    providers: [
        SeriesService,
        AuthService,
        Title
    ]
})
export class GuideModule {
}
