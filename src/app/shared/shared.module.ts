import { NgModule } from '@angular/core';
import { UrlPipe } from './pipes/url-helper.pipe';
import { FanartPipe } from './pipes/fanart-helper.pipe';

@NgModule({
    declarations: [
        UrlPipe,
        FanartPipe
    ],
    exports: [
        UrlPipe,
        FanartPipe
    ]
})
export class SharedModule {
}
