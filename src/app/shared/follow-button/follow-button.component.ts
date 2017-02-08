import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Series } from '../model/series';
import { SeriesService } from '../services/series.service';

@Component({
    selector: 'as-follow',
    templateUrl: 'app/shared/follow-button/follow-button.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FollowbuttonComponent implements OnInit {
    @Input() series: Series;
    public buttonLabel: string;
    public followingText: string;
    public notfollowingText: string;

    constructor( private seriesService: SeriesService ) {
        this.followingText = 'Unfollow';
        this.notfollowingText = 'Following';
    }

    ngOnInit() {
        this.updateButtonLabel();
    }

    toggle() {
        this.series.following = !this.series.following;

        if (this.series.following) {
            this.seriesService.unfollowSeries(this.series.id).then(
                (response) => {
                    this.updateButtonLabel();
                }
            );
        }else {
            this.seriesService.followSeries(this.series.id).then(
                (response) => {
                    this.updateButtonLabel();
                }
            );
        }

    }

    updateButtonLabel() {
        if (this.series.following) {
            this.buttonLabel = this.followingText;
        }else {
            this.buttonLabel = this.notfollowingText;
        }
    }

}
