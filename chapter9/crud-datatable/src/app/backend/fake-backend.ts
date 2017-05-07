/**
 * Implementation of the Mock-Backend
 */

import {Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {employess} from './employees';
import {uuid} from './uuid';
import {Employee} from '../model/employee';

function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    // first, get employess from the local storage or initial data array
    let data: Employee[] = JSON.parse(localStorage.getItem('employess')) || employess;

    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {
            // get all employees
            if (connection.request.url.endsWith('/fake-backend/employees') &&
                connection.request.method === RequestMethod.Get) {
                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: data
                })));

                return;
            }            
            
            // create employee
            if (connection.request.url.endsWith('/fake-backend/employees') &&
                connection.request.method === RequestMethod.Post) {
                let receivedEmployee = JSON.parse(connection.request.getBody());
                let newEmployee = Object.assign({id: uuid.generate()}, receivedEmployee);
                data[data.length] = newEmployee;
                
                localStorage.setItem('employess', JSON.stringify(data));

                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: newEmployee
                })));

                return;
            }
            
            // update employee
            if (connection.request.url.endsWith('/fake-backend/employees') &&
                connection.request.method === RequestMethod.Put) {
                let receivedEmployee = JSON.parse(connection.request.getBody());
                let clonedEmployee = Object.assign({}, receivedEmployee);
                data.forEach((element: Employee, index: number) => {
                    if(element.id === clonedEmployee.id) {
                        data[index] = clonedEmployee;
                    }
                });
                
                localStorage.setItem('employess', JSON.stringify(data));

                connection.mockRespond(new Response(new ResponseOptions({status: 200})));

                return;
            }
            
            // delete employee
            if (connection.request.url.match(/\/fake-backend\/employees\/.{36}$/) &&
                connection.request.method === RequestMethod.Delete) {
                let urlParts = connection.request.url.split('/');
                let id = urlParts[urlParts.length - 1];
                data = data.filter((element: Employee) => element.id !== id);
                
                localStorage.setItem('employess', JSON.stringify(data));

                connection.mockRespond(new Response(new ResponseOptions({status: 200})));

                return;
            }

            // pass through any requests not handled above
            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                        connection.mockRespond(response);
                    },
                    (error: any) => {
                        connection.mockError(error);
                    });
        }, 500);

    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
