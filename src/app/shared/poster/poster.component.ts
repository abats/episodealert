import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Series } from '../model/series';

@Component({
    selector: 'as-poster',
    templateUrl: 'app/shared/poster/poster.html',
    // TODO: Investigate how to implement OnPush strategy
    changeDetection: ChangeDetectionStrategy.Default
})

export class PosterComponent implements OnInit {
    @Input() series: Series;

    ngOnInit() {
       console.log('init');
    }


}
