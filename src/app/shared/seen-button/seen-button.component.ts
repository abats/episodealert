import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Series } from '../model/series';
import { SeriesService } from '../services/series.service';

@Component({
    selector: 'as-seen',
    templateUrl: 'app/shared/seen-button/seen-button.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SeenbuttonComponent implements OnInit {
    @Input() episode: any;
    public buttonLabel: string;
    public seenText: string;
    public notseenText: string;

    constructor( private seriesService: SeriesService ) {
        this.seenText = 'Unsee';
        this.notseenText = 'Seen';
    }

    ngOnInit() {
        this.updateButtonLabel();

        console.log(this.episode);
    }

    toggle() {
        this.episode.seen = !this.episode.seen;
        this.updateButtonLabel();
    }

    updateButtonLabel() {
        if (this.episode.seen) {
            this.buttonLabel = this.seenText;
        }else {
            this.buttonLabel = this.notseenText;
        }
    }

}
