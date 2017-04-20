import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../shared/services/series.service';

@Component({
    selector: 'app-userstats',
    templateUrl: 'user-stats.html'
})

export class UserStatsComponent implements OnInit {

    profileStats: any;

    constructor(
            private seriesService: SeriesService
        ) {
    }

    getStats() {
        this.seriesService.getProfileStats().then(
            (stats) => {
                this.profileStats = stats;
            }
        );
    }

    ngOnInit() {
        this.getStats();
    }

}
