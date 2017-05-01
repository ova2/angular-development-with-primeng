import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Employee from './employee';

@Injectable()
export class EmployeeService {

    constructor(private http: Http) {
    }

    getEmployees(): Observable<Employee[]> {
        return this.http.get('/assets/data/employees.json')
            .map(response => response.json().data as Employee[]);
    }
}
