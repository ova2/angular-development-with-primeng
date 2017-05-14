## Custom wizard component implemented with Angular 2+ and PrimeNG

There are two components `<pe-steps>` and `<pe-step>` which allow to implement a wizard like behavior. The navigation between wizard steps happens by clicking on breadcrumb items, buttons or setting step's index programmatically.

![Screenshot](https://raw.githubusercontent.com/ova2/angular-development-with-primeng/master/chapter9/primeng-extensions-wizard/wizard.png)

## Usage example

```sh
import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'user-data-wizard',
    templateUrl: `
        <form novalidate>
            <pe-steps [(activeIndex)]="activeIndex" (change)="onChange($event)">
                <pe-step label="First Step">
                    <label for="firstname">First Name:</label>
                    <input id="firstname" name="firstname" type="text"
                           pInputText [(ngModel)]="firstName"/>
                    <button pButton label="Go" (click)="next()"></button>
                </pe-step>
                
                <pe-step label="Second Step">
                    <label for="lastname">Last Name:</label>
                    <input id="lastname" name="lastname" type="text"
                           pInputText [(ngModel)]="lastName"/>
                    <button pButton label="Go" (click)="next()"></button>
                </pe-step>
                
                <pe-step label="Third Step">
                    <label for="address">Address:</label>
                    <input id="address" name="address" type="text"
                           pInputText [(ngModel)]="address"/>
                    <button pButton label="Ok" (click)="ok()"></button>
                </pe-step>
            </pe-steps>
            
            <p-growl [value]="msgs"></p-growl>
        </form>
    `
})
export class UserDataWizardComponent {
    activeIndex: number = 0;
    firstName: string;
    lastName: string;
    address: string;

    msgs: Message[] = [];

    next() {
        this.activeIndex++;
    }

    ok() {
        this.activeIndex = 0;
    }

    onChange(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
```

## API

`<pe-step>`

__Attributes__

| Name       | Type    | Default | Description                          |
| -----------|---------| --------| ------------------------------------ |
| styleClass | string  | null    | Style class of single step component |
| label      | string  | null    | Label of this step shown above       |

__Styling__

| Name              | Element                                    |
| ------------------|--------------------------------------------|
| pe-step-container | Container element of single step component |

`<pe-steps>`

__Attributes__

| Name        | Type    | Default | Description                                |
| ------------|---------| --------| ------------------------------------------ |
| activeIndex | number  | 0       | Index of the active step (two way binding) |
| styleClass  | string  |  null   | Style class of wizard's container element  |
| stepClass   | string  | null    | Style class of each step component         |

__Events__

| Name   | Parameters                           | Description                           |
| -------|--------------------------------------| --------------------------------------|
| change | label: label of currently shown step | Callback invoked when switching steps |

## Installation

__Angular 2.x__

Run

```sh
npm install primeng-extensions-wizard@">=1.0.3 <2.0.0" --save
```

__Angular 4.x__

Run

```sh
npm install primeng-extensions-wizard --save
```

Import `WizardModule`.

```sh
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
...

@NgModule({
    imports: [
        ...
        WizardModule
    ],
    ...
})
export class AppModule {
}
```