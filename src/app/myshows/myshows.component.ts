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

    profileSeries: Series [];

    constructor( private seriesService: SeriesService,
                 private authService: AuthService,
                 private titleService: Title) {

        titleService.setTitle('Episode Alert - Guide');
    }

    getProfileSeries() {
        this.seriesService.getProfileSeries().then(
            (series) => {
                this.profileSeries = series;
            }
        );
    }

    ngOnInit() {
        this.getProfileSeries();

        console.log(this.authService.isLoggedIn());

        if (!this.authService.isLoggedIn()) {
            this.authService.getAuth()
                .then((authInfo) => {
                    // console.log(authInfo);
                });
        }

    }
}
