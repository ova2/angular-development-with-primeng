/**
 * An implementation for the Mock-Backend which can be used instead of the json-server
 * when FileUpload uses Angular Http service. See issue: https://github.com/primefaces/primeng/issues/2594
 * 
 * app.modules.ts should be extended as follows:
 * 
 * import {MockBackend} from '@angular/http/testing';
 * import {BaseRequestOptions} from '@angular/http';
 * import {fakeBackendProvider} from './backend/fake-backend';
 * 
 * providers: [
 *  {provide: APP_BASE_HREF, useValue: '/'},
 *   fakeBackendProvider,
 *   MockBackend,
 *   BaseRequestOptions
 * ]
 */

import {Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {
            // file upload
            if (connection.request.url.endsWith('fake-backend') &&
                connection.request.method === RequestMethod.Post) {
                console.log(connection.request.getBody());

                // respond 200 OK
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
