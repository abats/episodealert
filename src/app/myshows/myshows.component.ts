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
    pristineSeries: Series [];
    seriesTest: Series [];
    profileSeries: Series [];
    search: String;
    order: String = '';
    orderReverse: boolean;
    @StorageProperty() public profileSeriesView: string;
    @StorageProperty() public showUnseen: boolean;
    @StorageProperty() public showArchive: boolean;
    @StorageProperty() public showEnded: boolean;


    constructor( private seriesService: SeriesService,
                 private authService: AuthService,
                 private titleService: Title,
                 private localStorage: LocalStorage) {

        titleService.setTitle('Episode Alert - My Shows');


        /*
         * TODO: Implement services as observables one day
         */
        // let series$ = seriesService.getProfileSeriesTest();
        //
        // series$.subscribe(
        //     series => this.seriesTest = series
        // );

    }

    getProfileSeries() {
        this.seriesService.getProfileSeries().then(
            (series) => {
                this.profileSeries = series;
                this.pristineSeries = series;

                /*
                 * Initial sorting
                 */
                this.filterSeries();
            }
        );
    }

    /*
     * UI toggles
     */

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

    clickToggleUnseen() {
        this.showUnseen = !this.showUnseen;
        this.filterSeries();
    }

    clickToggleArchive() {
        this.showArchive = !this.showArchive;
        this.filterSeries();
    }

    clickToggleEnded() {
        this.showEnded = !this.showEnded;
        this.filterSeries();
    }

    setOrder(order) {
        this.orderReverse = !this.orderReverse;
        this.order = order;
    }

    /*
     * filter out the series
     */

    filterSeries() {

        if (this.pristineSeries.length > 0) {
            this.profileSeries = this.pristineSeries.slice();


            for (let i = this.profileSeries.length - 1; i >= 0; i--) {
                if (this.showUnseen) {
                    if (this.profileSeries[i].unseen_episodes === 0) {
                        this.profileSeries.splice(i, 1);
                        continue;
                    }
                }
            }

            /*
             * If Archive is false they should be filtered out
             */
            for (let i = this.profileSeries.length - 1; i >= 0; i--) {
                if (!this.showArchive) {
                    if (this.profileSeries[i].archive) {
                        this.profileSeries.splice(i, 1);
                        continue;
                    }
                }
            }

            /*
             * If Ended is true they should be filtered out
             */
            for (let i = this.profileSeries.length - 1; i >= 0; i--) {
                if (this.showEnded) {
                    if (this.profileSeries[i].status === 'Ended') {
                        this.profileSeries.splice(i, 1);
                        continue;
                    }
                }
            }


        }
    }

    ngOnInit() {
        this.order = '';
        this.orderReverse = true;
        this.getProfileSeries();

        // TODO: get the profileSeriesView on init, otherwise set it to a default
        if (!this.profileSeriesView) {
            this.profileSeriesView = 'poster';
        }

        if (!this.authService.isLoggedIn()) {
            this.authService.getAuth()
                .then((authInfo) => {
                    // console.log(authInfo);
                });
        }

    }
}
