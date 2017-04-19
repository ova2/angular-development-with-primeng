import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'chips.component.html'
})
export class ChipsComponent {
    msgs: Message[] = [];
    
    contactnames: string[];

    contactnotified: string[];

    complexcontacts: string[];

    disabledcontacts:string[]=['PrimeTek','GeekoTek'];

    activeIndex: number = 0;
    
    onAddContact() {
        this.msgs.length = 0;
        this.msgs.push(
            {severity: 'info', summary: 'The contact is added'});
    }

    onRemoveContact() {
        this.msgs.length = 0;
        this.msgs.push(
            {severity: 'info', summary: 'The contact is removed'});
    }

    ngOnInit() {

    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
