import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../shared/services/series.service';
import { Series } from '../shared/model/series';
import { AuthService } from '../shared/services/authentication.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'as-myshows',
    templateUrl: 'app/myshows/myshows.html',
    styleUrls: [
        'app/myshows/myshows.css'
    ]
})
export class MyshowsComponent implements OnInit {

    trendingSeries: Series[];
    topSeries: Series[];
    seriesGenres: any;

    constructor( private seriesService: SeriesService,
                 private authService: AuthService,
                 private titleService: Title) {

        titleService.setTitle('Episode Alert - Guide');
    }

    getTrendingSeries() {
        this.seriesService.getTrendingSeries().then(
            (series) => {
                this.trendingSeries = series;
            }
        );
    }

    getTopSeries() {
        this.seriesService.getTopSeries().then(
            (series) => {
                this.topSeries = series;
            }
        );
    }

    getSeriesGenres() {
        this.seriesGenres = this.seriesService.getSeriesGenres();
    }

    ngOnInit() {
        this.getTrendingSeries();
        this.getTopSeries();
        this.getSeriesGenres();

        console.log(this.authService.isLoggedIn());

        if (!this.authService.isLoggedIn()) {
            this.authService.getAuth()
                .then((authInfo) => {
                    // console.log(authInfo);
                });
        }

    }
}
