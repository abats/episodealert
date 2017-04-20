import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../shared/services/series.service';
import { Series } from '../shared/model/series';
import { AuthService } from '../shared/services/authentication.service';
import { Title } from '@angular/platform-browser';
import { LocalStorage, StorageProperty } from '../../../node_modules/h5webstorage';

@Component({
    selector: 'app-myshows',
    templateUrl: 'myshows.html',
    styleUrls: [
        'myshows.scss'
    ]
})
export class MyshowsComponent implements OnInit {

    profileSeries: Series [];
    search: String;
    order: String = '';
    orderReverse: boolean;
    @StorageProperty() public profileSeriesView: string;

    constructor( private seriesService: SeriesService,
                 private authService: AuthService,
                 private titleService: Title,
                 private localStorage: LocalStorage) {

        titleService.setTitle('Episode Alert - My Shows');

    }

    getProfileSeries() {
        this.seriesService.getProfileSeries().then(
            (series) => {
                console.log(series);
                this.profileSeries = series;
            }
        );
    }

    toggleSeriesView() {
        let newValue: string;

        if (this.profileSeriesView === 'poster') {
            newValue = 'poster_big';

        } else if (this.profileSeriesView === 'poster_big') {
            newValue = 'list';
        } else if (this.profileSeriesView === 'list') {
            newValue = 'poster';
        }

        this.profileSeriesView = newValue;

    }

    setOrder(order) {
        this.orderReverse = !this.orderReverse;
        this.order = order;
    }

    ngOnInit() {
        this.order = '';
        this.orderReverse = true;
        this.getProfileSeries();

        // TODO: get the profileSeriesView on init, otherwise set it to a default
        if (!this.profileSeriesView) {
            this.profileSeriesView = 'poster';
        }

        console.log(this.authService.isLoggedIn());

        if (!this.authService.isLoggedIn()) {
            this.authService.getAuth()
                .then((authInfo) => {
                    // console.log(authInfo);
                });
        }

    }
}
