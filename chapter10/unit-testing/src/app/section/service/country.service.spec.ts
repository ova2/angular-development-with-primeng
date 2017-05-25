import {TestBed, inject} from '@angular/core/testing';
import {HttpModule, XHRBackend, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {CountryService} from './country.service';
import Country from './country';

describe('CountryService (MockBackend)', () => {
    let mockbackend: MockBackend, service: CountryService;

    // setup
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                CountryService,
                MockBackend,
                {provide: XHRBackend, useClass: MockBackend}
            ]
        })
    });

    beforeEach(inject([CountryService, MockBackend], (cs: CountryService, mb: MockBackend) => {
        service = cs;
        mockbackend = mb;
    }));

    // specs
    it('should return mocked response', () => {
        let israel: Country = {'name': 'Israel', 'dial_code': '+972', 'code': 'IL'};
        let angola: Country = {'name': 'Angola', 'dial_code': '+244', 'code': 'AO'};
        let response = [israel, angola];

        mockbackend.connections.subscribe((connection: MockConnection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                status: 200,
                body: JSON.stringify(response)
            })));
        });

        service.getCountries().subscribe(countries => {
            expect(countries.length).toBe(2);
            expect(countries).toContain(israel);
            expect(countries).toContain(angola);
        });
    });
});
