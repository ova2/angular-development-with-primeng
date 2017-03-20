import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarService {
    
    constructor(private http: Http) {}

    getCars() {
        return this.http.get('../../../assets/data/cars.json')
                    .toPromise()
                    .then((res:any) => <any[]> res.json().data)
                    .then((data:any) => { return data; });
    }
}