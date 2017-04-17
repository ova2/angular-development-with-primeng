import {Component} from '@angular/core';
import {SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'src/app/section/section.component.html',
    styleUrls: ['src/app/section/section.component.css']
})
export class SectionComponent {
    date: string;
    cities: SelectItem[];
    selectedCity: string;

    constructor() {
        this.cities = [];
        this.cities.push({label: 'New York', value: 'New York'});
        this.cities.push({label: 'Rome', value: 'Rome'});
        this.cities.push({label: 'London', value: 'London'});
        this.cities.push({label: 'Istanbul', value: 'Istanbul'});
        this.cities.push({label: 'Paris', value: 'Paris'});
    }
}
