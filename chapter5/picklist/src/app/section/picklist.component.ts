import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {CountryService} from './service/country.service';
import Country from './service/country';

@Component({
    selector: 'section',
    templateUrl: 'picklist.component.html'
})
export class PickListComponent {
    msgs: Message[] = [];
    activeIndex: number = 0;

    sourceCountries: Country[];

    targetCountries: Country[];

    constructor(private countryService: CountryService) { }

    ngOnInit() {
        this.countryService.getCountries().subscribe((countries: Country[]) => {
            this.sourceCountries = countries;
        });
        this.targetCountries = [];
    }

    onMoveToTarget(event:any){
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'onMoveToTarget Event', detail: event.items});
    }

    onMoveToSource(event:any){
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'onMoveToSource Event', detail: event.items});
    }

    onSourceReorder(event:any){
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'onSourceReorder Event', detail: event.items});
    }

    onTargetReorder(event:any){
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'onTargetReorder Event', detail: event.items});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
