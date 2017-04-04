import { NgModule } from '@angular/core';
import { LoginComponent } from './index';
import { SharedModule } from '../shared/shared.module';
import { SeriesService } from '../shared/services/series.service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../shared/services/authentication.service';
import { Title } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { ModalModule } from 'ng2-bootstrap/components/modal';


@NgModule({
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        SharedModule,
        HttpModule,
        FormsModule,
        ModalModule
    ],
    providers: [
        SeriesService,
        AuthService,
        Title,
    ]
})
export class UserModule {
}
