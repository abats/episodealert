import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Series } from '../model/series';

import 'rxjs/add/operator/toPromise';
import { CONSTANTS } from '../constant/index';

@Injectable()
export class SeriesService {

    private baseUrl: string;
    private singleSeriesUrl: string;
    private singleSeasonUrl: string;
    private topSeriesUrl: string;
    private spotlightSeriesUrl: string;
    private trendingSeriesUrl: string;
    private profileUrl: string;
    private followUrl: string;
    private unfollowUrl: string;

    constructor( private http: Http ) {
        this.baseUrl = CONSTANTS.MAIN.APP.API_BASE_URL;
        this.topSeriesUrl = this.baseUrl + 'series/top';
        this.trendingSeriesUrl = this.baseUrl + 'series/trending';
        // TODO: Change when we have spotlight
        this.spotlightSeriesUrl = this.baseUrl + 'series/top';
        this.profileUrl = this.baseUrl + 'profile/following';
        this.singleSeriesUrl = this.baseUrl + 'series/';
        this.singleSeasonUrl = this.baseUrl + 'series/episodesbyseason/';
        this.followUrl = this.baseUrl + 'follow/';
        this.unfollowUrl = this.baseUrl + 'unfollow/';
    }

    /*
     * Following
     */

    followSeries(seriesId) {
        return this.http.get(this.followUrl + seriesId)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    unfollowSeries(seriesId) {
        return this.http.get(this.unfollowUrl + seriesId)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getSingleSeries(uniqueName): Promise<Series> {
        return this.http.get(this.singleSeriesUrl + uniqueName)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getSeriesSeason(seriesId, seriesSeason) {
        return this.http.get(this.singleSeasonUrl + seriesId + '/' + seriesSeason)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getTopSeries(): Promise<Series[]> {
        return this.http.get(this.topSeriesUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getSpotlightSeries(): Promise<Series []> {
        return this.http.get(this.spotlightSeriesUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getSeriesGenres() {
        return [{'genre' : 'Action'}, {'genre' : 'Adventure'}, {'genre' : 'Animation'}, {'genre' : 'Comedy'}
            , {'genre' : 'Children'}, {'genre' : 'Crime'}, {'genre' : 'Drama'}, {'genre' : 'Documentary'}
            , {'genre' : 'Fantasy'}, {'genre' : 'Mystery'}, {'genre' : 'Game Show'}, {'genre' : 'Horror'}
            , {'genre' : 'News'}, {'genre' : 'Reality'}, {'genre' : 'Science-Fiction'}, {'genre' : 'Soap'}
            , {'genre' : 'Sport'}, {'genre' : 'Talk Show'}, {'genre' : 'Western'}, {'genre' : 'Travel'}, {'genre' : 'Romance'}];
    }

    getTrendingSeries(): Promise<Series[]> {
        return this.http.get(this.trendingSeriesUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    /* TODO: move to profile service */
    getProfileSeries(): Promise<Series[]> {
        return this.http.get(this.profileUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
