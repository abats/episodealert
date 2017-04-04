import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './index';
import { UserModule } from '../../user/user.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        UserModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {
}
