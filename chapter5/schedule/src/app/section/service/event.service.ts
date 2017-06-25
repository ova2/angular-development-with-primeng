import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

    constructor(private http: Http) {
    }

    getEvents(): Observable<any> {
        return this.http.get('/assets/data/scheduleevents.json')
            .map(response => response.json().data);
    }
}
