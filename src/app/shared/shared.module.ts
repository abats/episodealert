import { NgModule } from '@angular/core';
import { SearchPipe, FanartPipe, UrlPipe, OrderBy } from './pipes/index';
import { FollowbuttonComponent } from './follow-button/index';
import { SeenbuttonComponent } from './seen-button/index';
import { PosterComponent } from './poster/poster.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        OrderBy,
        SearchPipe,
        UrlPipe,
        FanartPipe,
        FollowbuttonComponent,
        SeenbuttonComponent,
        PosterComponent,
        UserStatsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],

    exports: [
        OrderBy,
        SearchPipe,
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
