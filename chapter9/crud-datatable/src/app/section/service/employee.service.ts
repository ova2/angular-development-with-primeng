import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Employee} from '../../model/employee';

@Injectable()
export class EmployeeService {
    constructor(private http: Http) {
    }

    getEmployees(): Observable<Employee[]> {
        return this.http.get('/fake-backend/employees')
            .map(response => response.json() as Employee[]);
    }

    createEmployee(employee: Employee): Observable<Employee> {
        return this.http.post('/fake-backend/employees', employee)
            .map(response => response.json() as Employee);
    }

    updateEmployee(employee: Employee): Observable<void> {
        return this.http.put('/fake-backend/employees', employee)
            .map(response => response.json());
    }

    deleteEmployee(id: string): Observable<void> {
        return this.http.delete('/fake-backend/employees/' + id)
            .map(response => response.json());
    }
}
