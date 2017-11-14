import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SearchService } from './search.service';
import { HttpModule } from '@angular/http';
import { SearchRoutingModule } from './search.routes';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        SearchComponent,
    ],
    exports: [
        SearchComponent
    ],
    imports: [
        SearchRoutingModule,
        HttpModule,
        CommonModule,
        SharedModule
    ],
    providers: [
        SearchService,
    ]
})
export class SearchModule {
}
