import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {SelectItem,MenuItem} from 'primeng/components/common/api';
import {CountryService} from './service/countryservice';
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

    constructor(private countryService: CountryService) {

    }

    onFocus(){
        this.msgs=[];
        this.msgs.push({severity: 'info', summary: 'The dropdown gets focus'});
    }

    onBlur(){
        this.msgs=[];
        this.msgs.push({severity: 'info', summary: 'The dropwdown loses focus'});
    }

    onChange(){
        this.msgs=[];
        this.msgs.push({severity: 'info', summary: 'The dropdown is changed'});
    }

    onChangeMultiselect() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The Multiselect selection is changed'});
    }

    generateCountries(countriesArray:Country[]) {
        let countryList: any[] = [];
        let countryCodes: any[] = [];
        for (let country of countriesArray) {
            countryList.push({label:country.name,value:{name:country.name,dial_code:country.dial_code,code:country.code}});
            countryCodes.push({label:country.code,value:{name:country.name,dial_code:country.dial_code,code:country.code}});
        }
        this.countries = countryList;
        this.countrycodes = countryCodes;
    }

    activeIndex: number = 0;
    private items: MenuItem[];

    ngOnInit(){

        this.countryService.getCountries().subscribe((countriesArray : Country[]) => {
             this.generateCountries(countriesArray);
        });
        this.items = [
            {
                label: 'Single selection',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Basic dropdown selection', detail: event.item.label});
                }
            },
            {
                label: 'Editable',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Editable dropdown', detail: event.item.label});
                }
            },{
                label: 'Customized selection',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Customized content with filters', detail: event.item.label});
                }
            },{
                label: 'MultiSelect',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'MultiSelect dropdown', detail: event.item.label});
                }
            },
            {
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 4;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Events: onFocus,onBlur,onChange', detail: event.item.label});
                }
            },
            {
                label: 'Disabled',
                command: (event: any) => {
                    this.activeIndex = 5;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Disabled selection', detail: event.item.label});
                }
            },
        ];
    }

}
