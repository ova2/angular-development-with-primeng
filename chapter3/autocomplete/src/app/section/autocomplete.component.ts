import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {CarService} from './service/carservice';

@Component({
    selector: 'section',
    templateUrl: 'autocomplete.component.html'
})
export class AutoCompleteComponent {
    car: any;

    cars: any[];

    brand: string;

    carInstance: any;

    customCarDisplay: any[];

    brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];

    filteredCars: any[];

    filteredCarsMultiple: any[];

    filteredBrands: any[];

    filteredCarInstances : any[];

    filteredCustomCars: any[];

    constructor(private carService: CarService) { }

    filterCarInstances(event:any) {
        this.carService.getCars().subscribe((cars : any) => {
            this.filterCarInstances = cars;
        });
    }

    filterCars(event:any) {
        let query = event.query;
        this.carService.getCars().subscribe((cars : any) => {
            this.filteredCars = this.filterCar(query, cars);
        });
    }

    filterCarsMultiple(event:any) {
        let query = event.query;
        this.carService.getCars().subscribe((cars : any) => {
            this.filteredCarsMultiple = this.filterCar(query, cars);
        });
    }

    filterCustomCars(event:any){
        let query = event.query;
        this.carService.getCars().subscribe((cars : any) => {
            this.filteredCarsMultiple = this.filterCar(query, cars);
        });
    }

    filterBrands(event:any) {
        this.filteredBrands = [];
        for(let i = 0; i < this.brands.length; i++) {
            let brand = this.brands[i];
            if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    }

    handleDropdownClick() {
        this.filteredBrands = [];
        setTimeout(() => {
            this.filteredBrands = this.brands;
        }, 100)
    }

    filterCar(query:any, cars: any[]):any[] {
        let filtered : any[] = [];
        for(let i = 0; i < cars.length; i++) {
            let car = cars[i];
            if(car.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(car);
            }
        }
        return filtered;
    }
}
