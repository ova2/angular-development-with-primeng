import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {TreeNode} from 'primeng/components/common/api';

@Injectable()
export class TreeNodeService {

    constructor(private http: Http) {
    }

    getTouristPlaces(): Observable<any[]> {
        return this.http.get('/assets/data/cities.json')
            .map(response => response.json().data);
    }
}
