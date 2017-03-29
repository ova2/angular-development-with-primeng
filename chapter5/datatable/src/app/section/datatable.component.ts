import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'datatable.component.html'
})
export class DataTableComponent {
    msgs: Message[];

    cars: Car[];

    selectedCar1: Car;

    selectedCar2: Car;

    selectedCar3: Car;

    selectedCars1: Car[];

    selectedCars2: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
    }

    onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand});
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Car Unselected', detail: event.data.vin + ' - ' + event.data.brand});
    }
////////
    cars1: Car[];

    cars2: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars1 = cars);
        this.carService.getCarsSmall().then(cars => this.cars2 = cars);
    }

////////////
    cars: Car[];

    brands: SelectItem[];

    colors: SelectItem[];

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);

        this.brands = [];
        this.brands.push({label: 'All Brands', value: null});
        this.brands.push({label: 'Audi', value: 'Audi'});
        this.brands.push({label: 'BMW', value: 'BMW'});
        this.brands.push({label: 'Fiat', value: 'Fiat'});
        this.brands.push({label: 'Honda', value: 'Honda'});
        this.brands.push({label: 'Jaguar', value: 'Jaguar'});
        this.brands.push({label: 'Mercedes', value: 'Mercedes'});
        this.brands.push({label: 'Renault', value: 'Renault'});
        this.brands.push({label: 'VW', value: 'VW'});
        this.brands.push({label: 'Volvo', value: 'Volvo'});

        this.colors = [];
        this.colors.push({label: 'White', value: 'White'});
        this.colors.push({label: 'Green', value: 'Green'});
        this.colors.push({label: 'Silver', value: 'Silver'});
        this.colors.push({label: 'Black', value: 'Black'});
        this.colors.push({label: 'Red', value: 'Red'});
        this.colors.push({label: 'Maroon', value: 'Maroon'});
        this.colors.push({label: 'Brown', value: 'Brown'});
        this.colors.push({label: 'Orange', value: 'Orange'});
        this.colors.push({label: 'Blue', value: 'Blue'});
    }
}
/////////////


}
