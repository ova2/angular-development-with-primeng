import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Browser from './browser';

@Injectable()
export class BrowserService {

    constructor(private http: Http) {
    }

    getBrowsers(): Observable<Browser[]> {
        return this.http.get('/assets/data/browsers.json')
            .map(response => response.json().data as Browser[]);
    }
}
