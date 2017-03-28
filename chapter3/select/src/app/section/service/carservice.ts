import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import Car from './car'

@Injectable()
export class CarService {
    
    constructor(private http: Http) {}

    getCars(): Obvervable<Car[]> {
        return this.http.get("../../../assets/data/cars.json")
            .map((response:any) => response.json().data as Car[]);
    }
}