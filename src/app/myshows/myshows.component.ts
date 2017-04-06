import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../shared/services/series.service';
import { Series } from '../shared/model/series';
import { AuthService } from '../shared/services/authentication.service';
import { Title } from '@angular/platform-browser';
import { LocalStorage, StorageProperty } from 'h5webstorage';

@Component({
    selector: 'as-myshows',
    templateUrl: 'app/myshows/myshows.html',
    styleUrls: [
        'app/myshows/myshows.css'
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
                this.profileSeries = series;
            }
        );
    }

    toggleSeriesView(){
        let newValue: string;

        if(this.profileSeriesView === 'poster'){
            newValue = 'poster_big';

        }else if(this.profileSeriesView === 'poster_big'){
            newValue = 'list';
        }

        else if(this.profileSeriesView === 'list'){
            newValue = 'poster';
        }

        this.profileSeriesView = newValue;

    }

    setOrder(order){
        this.orderReverse = !this.orderReverse;
        this.order = order;
    }

    ngOnInit() {
        this.order = '';
        this.orderReverse = true;
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
