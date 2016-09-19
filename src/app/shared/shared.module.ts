import { NgModule } from '@angular/core';
import { UrlPipe } from './pipes/url-helper.pipe';

@NgModule({
    declarations: [
        UrlPipe
    ],
    exports: [
        UrlPipe
    ]
})
export class SharedModule {
}
