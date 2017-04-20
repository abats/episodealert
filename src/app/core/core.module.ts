import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './navbar/navbar.module';
import { Navbar2Module } from './navbar2/navbar.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,
        Navbar2Module,
        FooterModule
    ],
    exports: [
        NavbarModule,
        Navbar2Module,
        FooterModule
    ]
})
export class CoreModule {
}
