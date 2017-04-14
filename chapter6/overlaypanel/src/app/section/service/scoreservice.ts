import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Score from './score';

@Injectable()
export class ScoreService {

    constructor(private http: Http) {
    }

    getScores(): Observable<Score[]> {
        return this.http.get('/assets/data/scores.json')
            .map(response => response.json().data as Score[]);
    }
}
