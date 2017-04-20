import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Navbar2Component } from './navbar.component';
import { UserModule } from '../../user/user.module';

@NgModule({
    declarations: [
        Navbar2Component
    ],
    imports: [
        RouterModule,
        BrowserModule,
        UserModule
    ],
    exports: [
        Navbar2Component
    ]
})
export class Navbar2Module {
}
