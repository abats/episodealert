import { NgModule } from '@angular/core';
import { UrlPipe } from './pipes/url-helper.pipe';
import { FanartPipe } from './pipes/fanart-helper.pipe';
import { FollowbuttonComponent } from './follow-button/index';
import { SeenbuttonComponent } from './seen-button/index';
import { PosterComponent } from './poster/poster.component';

@NgModule({
    declarations: [
        UrlPipe,
        FanartPipe,
        FollowbuttonComponent,
        SeenbuttonComponent,
        PosterComponent
    ],
    exports: [
        UrlPipe,
        FanartPipe,
        FollowbuttonComponent,
        SeenbuttonComponent,
        PosterComponent
    ]
})
export class SharedModule {
}
