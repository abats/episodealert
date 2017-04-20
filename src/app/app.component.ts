import { Component, ViewEncapsulation } from '@angular/core';

import { CONSTANTS } from './shared/constant/main';

@Component({
    selector: 'app-main',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    public appBrand: string;

    constructor() {
        this.appBrand = CONSTANTS.APP.BRAND;
    }
}
