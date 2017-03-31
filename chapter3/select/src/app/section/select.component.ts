import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'select.component.html'
})
export class SelectComponent {
    msgs: Message[] = [];

    cities: SelectItem[];

    selectedCity: string;

    cars: SelectItem[];

    selectedCar: string = 'BMW';

    constructor() {

    }

    types: SelectItem[];

    private items: MenuItem[];
    activeIndex: number = 0;

    ngOnInit(){
        this. carService.getCars().then((cars : any) => {
            this.filteredCarsMultiple = this.filterCar(query, cars);
        });
        this.items = [
            {
                label: 'Basic',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Basic Rating', detail: event.item.label});
                }
            },
            {
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Rating Events', detail: event.item.label});
                }
            },{
                label: 'Cancel Control',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Cancel Control Rating', detail: event.item.label});
                }
            },
            {
                label: 'ReadOnly/Disabled',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'ReadOnly or disabled rating', detail: event.item.label});
                }
            },
        ];
        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});
    }

}
