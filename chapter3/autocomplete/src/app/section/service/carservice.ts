import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Car from './car'

@Injectable()
export class CarService {

    constructor(private http: Http) {}

    getCars(): Observable<Car[]> {
        return this.http.get("autocomplete/src/assets/data/cars.json")
            .map(response => response.json().data as Car[]);
    }
}