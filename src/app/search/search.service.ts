import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { CONSTANTS } from '../shared/constant/main';

@Injectable()
export class SearchService {
    queryUrl: string = 'series/search?query=';
    baseUrl: string = CONSTANTS.APP.API_BASE_URL;

    constructor(private http: Http) { }

    search(terms: Observable<string>) {
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.searchEntries(term));
    }

    searchEntries(term) {
        return this.http
            .get(this.baseUrl + this.queryUrl + term)
            .map(res => res.json());
    }
}
