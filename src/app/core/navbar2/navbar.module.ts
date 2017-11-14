import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Navbar2Component } from './navbar.component';
import { UserModule } from '../../user/user.module';
import { SearchModule } from '../../search/search.module';

@NgModule({
    declarations: [
        Navbar2Component
    ],
    imports: [
        RouterModule,
        BrowserModule,
        UserModule,
        SearchModule
    ],
    exports: [
        Navbar2Component
    ]
})
export class Navbar2Module {
}
