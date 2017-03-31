import {Component} from '@angular/core';
import {Message,MenuItem,SelectItem} from 'primeng/components/common/api';
import {CarService} from './service/carservice';
import Car from './service/car';

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

    selectedType: string="readonly";

    types: SelectItem[];

    constructor(private carService: CarService) { }

    msgs: Message[] = [];
    private items: MenuItem[];
    activeIndex: number = 0;

    filterCarInstances(event:any) {
        this.carService.getCars().subscribe((cars:any) => {
            this.filterCarInstances = cars;
        });
    }

    filterCars(event:any) {
        let query = event.query;
        this.carService.getCars().subscribe(cars => {
            console.log("cars==="+cars);
            this.filteredCars = this.filterCar(query, cars);
        });
    }

    filterCarsMultiple(event:any) {
        let query = event.query;
        this.carService.getCars().subscribe(cars=> {
            this.filteredCarsMultiple = this.filterCar(query, cars);
        });
    }

    filterCustomCars(event:any){
        let query = event.query;
        this.carService.getCars().subscribe(cars => {
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

    ngOnInit() {
        this.items = [
            {
                label: 'Basic',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Basic AutoComplete', detail: event.item.label});
                }
            },
            {
                label: 'Multiple selection',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Multiple selection', detail: event.item.label});
                }
            },
            {
                label: 'Dropdown',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Dropdown option', detail: event.item.label});
                }
            },
            {
                label: 'Object format display',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Object format display', detail: event.item.label});
                }
            },
            {
                label: 'Templating',
                command: (event: any) => {
                    this.activeIndex = 4;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Templating feature', detail: event.item.label});
                }
            },
            {
                label: 'ReadOnly/Disabled',
                command: (event: any) => {
                    this.activeIndex = 5;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'ReadOnly', detail: event.item.label});
                }
            },
        ];

        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});
    }

}
