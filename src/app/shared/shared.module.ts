import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { RouterModule } from '@angular/router';
import { SearchPipe, FanartPipe, UrlPipe, OrderBy, FilterByPipe, LimitToPipe } from './pipes/index';
import { FollowbuttonComponent } from './follow-button/index';
import { SeenbuttonComponent } from './seen-button/index';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        UserStatsComponent,
        OrderBy,
        SearchPipe,
        UrlPipe,
        FanartPipe,
        FilterByPipe,
        LimitToPipe,
        FollowbuttonComponent,
        SeenbuttonComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        UserStatsComponent,
        OrderBy,
        SearchPipe,
        FilterByPipe,
        UrlPipe,
        FanartPipe,
        LimitToPipe,
        FollowbuttonComponent,
        SeenbuttonComponent
    ]
})
export class SharedModule { }
