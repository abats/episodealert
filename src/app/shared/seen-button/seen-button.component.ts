import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SeriesService } from '../services/series.service';

@Component({
    selector: 'app-seen',
    templateUrl: 'seen-button.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SeenbuttonComponent {
    @Input() episode: any;
    @Input() buttonLabel: string;

    constructor( private seriesService: SeriesService ) {
    }

    toggle() {
        if (this.episode.seen) {
            this.seriesService.unseeEpisode(this.episode.id, 'until').then(
                (response) => {
                    this.episode.seen = !this.episode.seen;
                }
            );
        }else {
            this.seriesService.seenEpisode(this.episode.id, 'until').then(
                (response) => {
                    this.episode.seen = !this.episode.seen;
                }
            );
        }

    }
}
