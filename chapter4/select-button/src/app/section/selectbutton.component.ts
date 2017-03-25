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
    selectedTypes: string[] = ['PrimeNG','PrimeReact'];

    ngOnInit() {
        this.types = [];
        this.types.push({label: 'PrimeNG', value: 'PrimeNG'});
        this.types.push({label: 'PrimeUI', value: 'PrimeUI'});
        this.types.push({label: 'PrimeReact', value: 'PrimeReact'});
    }

    onChange(e:any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The selected options are '+e.value});
    }

}
