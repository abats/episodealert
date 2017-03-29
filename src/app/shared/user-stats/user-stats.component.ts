import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../shared/services/series.service';

@Component({
    selector: 'as-userstats',
    templateUrl: 'app/shared/user-stats/user-stats.html'
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
