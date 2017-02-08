import { NgModule } from '@angular/core';
import { UrlPipe } from './pipes/url-helper.pipe';
import { FanartPipe } from './pipes/fanart-helper.pipe';
import { FollowbuttonComponent } from './follow-button/index';
import { SeenbuttonComponent } from './seen-button/index';

@NgModule({
    declarations: [
        UrlPipe,
        FanartPipe,
        FollowbuttonComponent,
        SeenbuttonComponent
    ],
    exports: [
        UrlPipe,
        FanartPipe,
        FollowbuttonComponent,
        SeenbuttonComponent
    ]
})
export class SharedModule {
}
