import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'datalist.component.html'
})
export class DataListComponent {
    msgs: Message[] = [];

    cars: Car[];

    selectedCar: Car;

    displayDialog: boolean;

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsLarge().then(cars => this.cars = cars);
    }

    selectCar(car: Car) {
        this.selectedCar = car;
        this.displayDialog = true;
    }

    onDialogHide() {
        this.selectedCar = null;
    }
    onComplete() {
        this.msgs.push(
            {severity: 'info', summary: 'InputMask completed'});
    }
}
