import { NgModule } from '@angular/core';
import { UrlPipe } from './pipes/url-helper.pipe';
import { FanartPipe } from './pipes/fanart-helper.pipe';
import { FollowbuttonComponent } from './follow-button/index';
import { SeenbuttonComponent } from './seen-button/index';
import { PosterComponent } from './poster/poster.component';
import { UserStatsComponent } from './user-stats/user-stats.component';

@NgModule({
    declarations: [
        UrlPipe,
        FanartPipe,
        FollowbuttonComponent,
        SeenbuttonComponent,
        PosterComponent,
        UserStatsComponent
    ],
    exports: [
        UrlPipe,
        FanartPipe,
        FollowbuttonComponent,
        SeenbuttonComponent,
        PosterComponent,
        UserStatsComponent
    ]
})
export class SharedModule {
}
