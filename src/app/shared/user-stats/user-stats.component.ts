import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeriesService } from '../../shared/services/series.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'as-userstats',
    templateUrl: 'app/shared/user-stats/user-stats.html'
})

export class UserStatsComponent implements OnInit {

    constructor(
            private titleService: Title,
            private activatedRoute: ActivatedRoute,
            private seriesService: SeriesService
        ) {

        titleService.setTitle('Episode Alert - Series detail');

    }

    getStats() {
       //  get them stats
    }

    ngOnInit() {
        this.getStats();
        console.log('init');
    }

}
