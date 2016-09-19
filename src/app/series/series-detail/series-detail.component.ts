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
        {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
        {title: 'Dynamic Title 2', content: 'Dynamic content 2'},
        {title: 'Dynamic Title 3', content: 'Dynamic content 3'}
    ];

    private subscription: Subscription;

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
                console.log(this.series.name);
            }
        );
    }

    public alertMe(): void {
        setTimeout(function (): void {
            alert('You\'ve selected the alert tab!');
        });
    };

    public setActiveTab(index: number): void {
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
