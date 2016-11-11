import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Series } from '../model/series';

import 'rxjs/add/operator/toPromise';
import { CONSTANTS } from '../constant/index';

@Injectable()
export class SeriesService {

    private baseUrl: string;
    private singleSeriesUrl: string;
    private topSeriesUrl: string;
    private spotlightSeriesUrl: string;
    private trendingSeriesUrl: string;
    private profileUrl: string;

    constructor( private http: Http ) {
        this.baseUrl = CONSTANTS.MAIN.APP.API_BASE_URL;
        this.topSeriesUrl = this.baseUrl + 'series/top';
        this.trendingSeriesUrl = this.baseUrl + 'series/trending';
        this.spotlightSeriesUrl = this.baseUrl + 'series/spotlight';
        this.profileUrl = this.baseUrl + 'profile/following';
        this.singleSeriesUrl = this.baseUrl + 'series/';
    }

    getSingleSeries(uniqueName): Promise<Series> {
        return this.http.get(this.singleSeriesUrl + uniqueName)
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

    save(hero: Series): Promise<Series>  {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    delete(hero: Series) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.singleSeriesUrl}/${hero.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private put(hero: Series) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.singleSeriesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    private post(hero: Series): Promise<Series> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.singleSeriesUrl, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
