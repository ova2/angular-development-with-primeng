import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import Car from './car'

@Injectable()
export class CarService {
    
    constructor(private http: Http) {}

    getCars(): Observable<Car[]> {
        var x[]= this.http.get("../../../assets/data/cars.json")
            .map((response:any) => response.json().data as Car[]);
        console.log(x)
        return x;
    }
}