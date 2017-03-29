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

    ngOnInit(){
        this. carService.getCars().then((cars : any) => {
            this.filteredCarsMultiple = this.filterCar(query, cars);
        });
    }

}
