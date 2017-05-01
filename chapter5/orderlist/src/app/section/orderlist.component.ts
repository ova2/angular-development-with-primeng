import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {CountryService} from './service/country.service';
import Country from './service/country';

@Component({
    selector: 'section',
    templateUrl: 'orderlist.component.html'
})
export class OrderListComponent {
    msgs: Message[] = [];
    activeIndex: number = 0;

    countries: Country[];

    constructor(private countryService: CountryService) { }

    ngOnInit() {
        this.countryService.getCountries().subscribe((countries: Country[]) => {
            this.countries = countries;
        });
    }

    onReorder(event: any) {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'onReorder Event', detail: event.items});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
