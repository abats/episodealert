import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeriesService } from '../../shared/services/series.service';
import { Series } from '../../shared/model/series';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: 'app/series/series-detail/series-detail.html',
    styleUrls: [
        'app/series/series-detail/series-detail.css'
    ]
})

export class SeriesDetailComponent implements OnInit, OnDestroy {

    series: Series;
    uniqueName: string;

    public tabs: Array<any> = [
        // {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
        // {title: 'Dynamic Title 2', content: 'Dynamic content 2'},
        // {title: 'Dynamic Title 3', content: 'Dynamic content 3'}
    ];

    private subscription: Subscription;

    createSeriesSeasonTabs(seasonAmount) {
        for (let i = 0; i < seasonAmount; i++) {
            this.tabs.push( {title: 'Season ' +  i , content: []} );
        }

        console.log(this.tabs);
    }

    constructor(
            private titleService: Title,
            private activatedRoute: ActivatedRoute,
            private seriesService: SeriesService
        ) {

        titleService.setTitle('Episode Alert - Series detail');

        this.subscription = this.activatedRoute.params.subscribe(
            (param: any) => {
                this.uniqueName = param.uniqueName;
            });

    }

    getSeries() {
        this.seriesService.getSingleSeries(this.uniqueName).then(
            (series) => {
                this.series = series;
                console.log(series);
                this.createSeriesSeasonTabs(series.season_amount);
                this.setActiveTab(series.season_amount - 1);
            }
        );
    }

    getSeriesSeason(seriesId: number, seasonNumber: number) {
        this.seriesService.getSeriesSeason(seriesId, seasonNumber).then(
            (season) => {
                this.tabs[seasonNumber - 1].content = season;
            }
        );
    }

    public alertMe(): void {
        setTimeout(function (): void {
            alert('You\'ve selected the alert tab!');
        });
    };

    public loadTab(tab): void {
        this.getSeriesSeason(this.series.id, tab + 1);
    }

    public setActiveTab(index: number): void {
        console.log(index);
        this.loadTab(index);
        console.log('set active tab');
        this.tabs[index].active = true;
    };

    public removeTabHandler(/*tab:any*/): void {
        console.log('Remove Tab handler');
    };

    ngOnInit() {
        this.getSeries();
        console.log('init');
    }

    ngOnDestroy() {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    }
}
