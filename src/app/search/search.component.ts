import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Series } from '../shared/model/series';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-search',
    templateUrl: 'search.html',
    styleUrls: [
        'search.scss'
    ],
    providers: [ SearchService ]
})

export class SearchComponent implements OnInit {

    series: Series[];
    searchTerm$ = new Subject<string>();

    constructor(private searchService: SearchService,
                private changeDetector: ChangeDetectorRef) {
        this.searchService.search(this.searchTerm$)
            .subscribe(results => {
                this.series = results;
                changeDetector.detectChanges();
            });
    }

    ngOnInit() {

    }
}
