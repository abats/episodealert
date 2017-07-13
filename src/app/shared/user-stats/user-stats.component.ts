import { Component, OnInit, Input } from '@angular/core';
import { SeriesService } from '../../shared/services/series.service';

@Component({
    selector: 'app-userstats',
    templateUrl: 'user-stats.html',
     styleUrls: [
        'user-stats.scss'
    ]
})

export class UserStatsComponent implements OnInit {
    @Input() state: string;
    profileStats: any;

    constructor(
            private seriesService: SeriesService
        ) {
    }

    getStats() {
        switch (this.state) {
            case 'all':
                this.seriesService.getProfileStats().then(
                (stats) => {
                    this.profileStats = stats;
                    }
                );
                break;
            case 'withFilter':
                let today = new Date();
                let dateInLastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
                this.seriesService.getProfileStatsWithFilter(dateInLastWeek, today).then(
                (stats) => {
                    this.profileStats = stats;
                    }
                );
                break;
        }
    }

    ngOnInit() {
        console.log(this.state);
        this.getStats();
    }

}
