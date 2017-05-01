import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'selectbutton.component.html'
})
export class SelectButtonComponent {

    msgs: Message[] = [];

    types: SelectItem[];
    selectedType: string;
    selectedTypeEvents: string;
    selectedTypeDisabled: string;

    selectedTypes: string[] = ['PrimeNG','PrimeReact'];

    activeIndex: number = 0;

    ngOnInit() {
        this.types = [];
        this.types.push({label: 'PrimeNG', value: 'PrimeNG'});
        this.types.push({label: 'PrimeUI', value: 'PrimeUI'});
        this.types.push({label: 'PrimeReact', value: 'PrimeReact'});
    }

    onChange(e: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The selected options are ' + e.value});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
