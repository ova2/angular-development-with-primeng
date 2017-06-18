import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {VCard} from './vcard';

@Injectable()
export class VCardService {
    constructor(private http: Http) {
    }

    getVCards(): Observable<VCard[]> {
        return this.http.get('/assets/data/vcards.json')
            .map(response => response.json().data);
    }
}
