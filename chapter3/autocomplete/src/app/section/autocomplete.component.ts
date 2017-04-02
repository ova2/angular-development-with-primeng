import {Component} from '@angular/core';
import {Message, MenuItem, SelectItem} from 'primeng/components/common/api';
import {CountryService} from './service/countryservice';
import Country from './service/country';

@Component({
    selector: 'section',
    templateUrl: 'autocomplete.component.html'
})
export class AutoCompleteComponent {
    country: Country;
    countries: Country[];
    topcountry: string;
    countryInstance: Country;
    customCountry: Country;
    topAsiaCountries: string[] = ['Singapore', 'Hong Kong', 'South Korea', 'Japan', 'Israel', 'Brunei', 'Qatar', 'Cyprus', 'Saudi Arabia', 'United Arab Emirates'];
    filteredCountries: Country[];
    filteredCountriesMultiple: Country[];
    filteredTopAsiaCountries: string[];
    filteredCountryInstances: Country[];
    filteredCustomCountries: Country[];
    selectedType: string = 'readonly';
    types: SelectItem[];
    msgs: Message[] = [];
    activeIndex: number = 0;
    private items: MenuItem[];

    constructor(private countryService: CountryService) {
    }

    onFocus(){
        this.msgs=[];
        this.msgs.push({severity: 'info', summary: 'The autocomplete gets focus'});
    }

    onBlur(){
        this.msgs=[];
        this.msgs.push({severity: 'info', summary: 'The autocomplete loses focus'});
    }

    onSelect(){
        this.msgs=[];
        this.msgs.push({severity: 'info', summary: 'The autocomplete suggestion is selected'});
    }

    onUnselect(){
        this.msgs=[];
        this.msgs.push({severity: 'info', summary: 'The autocomplete selected item is removed'});
    }

    filterCountryInstances(event: any) {
        this.countryService.getCountries().subscribe((countries: Country[]) => {
            this.filteredCountryInstances = countries;
        });
    }

    filterCountries(event: any) {
        let query = event.query;
        this.countryService.getCountries().subscribe((countries: Country[]) => {
            this.filteredCountries = this.filterCountry(query, countries);
        });
    }

    filterCountriesMultiple(event: any) {
        let query = event.query;
        this.countryService.getCountries().subscribe((countries: Country[]) => {
            this.filteredCountriesMultiple = this.filterCountry(query, countries);
        });
    }

    filterCustomCountries(event: any) {
        let query = event.query;
        this.countryService.getCountries().subscribe((countries: Country[]) => {
            this.filteredCustomCountries = this.filterCountry(query, countries);
        });
    }

    filterTopAsiaCountries(event: any) {
        this.filteredTopAsiaCountries = [];
        for (let country of this.topAsiaCountries) {
            if (country.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                this.filteredTopAsiaCountries.push(country);
            }
        }
    }

    handleDropdownClick() {
        this.filteredTopAsiaCountries = [];
        setTimeout(() => {
            this.filteredTopAsiaCountries = this.topAsiaCountries;
        }, 100);
    }

    filterCountry(query: any, countries: Country[]): Country[] {
        let filtered: any[] = [];
        for (let country of countries) {
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Basic',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Basic AutoComplete', detail: event.item.label});
                }
            },
            {
                label: 'Multiple selection',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Multiple selection', detail: event.item.label});
                }
            },
            {
                label: 'Dropdown',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Dropdown option', detail: event.item.label});
                }
            },
            {
                label: 'Object format display',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Object format display', detail: event.item.label});
                }
            },
            {
                label: 'Templating',
                command: (event: any) => {
                    this.activeIndex = 4;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Templating feature', detail: event.item.label});
                }
            },
            {
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 5;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Events:onFocus,onBlur,onSelect,onUnselect', detail: event.item.label});
                }
            },
            {
                label: 'ReadOnly/Disabled',
                command: (event: any) => {
                    this.activeIndex = 6;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'ReadOnly and Disabled', detail: event.item.label});
                }
            },
        ];

        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});
    }
}
