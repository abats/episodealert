import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../shared/services/series.service';
import { Series } from '../shared/model/series';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../shared/services/authentication.service';

@Component({
    selector: 'as-home',
    templateUrl: 'app/home/home.html',
    styleUrls: [
        'app/home/home.css'
    ]
})
export class HomeComponent implements OnInit {
    trendingSeries: Series[];
    topSeries: Series[];
    spotlightSeries: Series[];
    seriesGenres: any;

    constructor( private seriesService: SeriesService,
                 private authService: AuthService,
                 private titleService: Title) {

        titleService.setTitle('Episode Alert - Trending');
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

    getSpotlightSeries() {
        this.seriesService.getSpotlightSeries().then(
            (series) => {
                this.spotlightSeries = series;
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
        this.getSpotlightSeries();

        console.log(this.authService.isLoggedIn());

        if (!this.authService.isLoggedIn()) {
            this.authService.getAuth()
                .then((authInfo) => {
                    // console.log(authInfo);
                });
        }

    }
}
