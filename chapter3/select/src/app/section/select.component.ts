import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {SelectItem} from 'primeng/components/common/api';
import {CountryService} from './service/country.service';
import Country from './service/country';

@Component({
    selector: 'section',
    templateUrl: 'select.component.html'
})
export class SelectComponent {
    msgs: Message[] = [];

    countries: SelectItem[];

    countrycodes: SelectItem[];

    selectedCountry: any;

    selectedCountries: string[] = [];

    activeIndex: number = 0;

    constructor(private countryService: CountryService) {

    }

    onFocus() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The dropdown gets focus'});
    }

    onBlur() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The dropwdown loses focus'});
    }

    onChange() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The dropdown is changed'});
    }

    onChangeMultiselect() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The Multiselect selection is changed'});
    }

    generateCountries(countriesArray: Country[]) {
        let countryList: any[] = [];
        let countryCodes: any[] = [];
        for (let country of countriesArray) {
            countryList.push({label: country.name, value: {name: country.name, dial_code: country.dial_code, code: country.code}});
            countryCodes.push({label: country.code, value: {name: country.name, dial_code: country.dial_code, code: country.code}});
        }
        this.countries = countryList;
        this.countrycodes = countryCodes;
    }

    ngOnInit() {
        this.countryService.getCountries().subscribe((countriesArray: Country[]) => {
             this.generateCountries(countriesArray);
        });
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
