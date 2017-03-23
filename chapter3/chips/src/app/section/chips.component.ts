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
    
    onAddContacts() {
        this.msgs.push(
            {severity: 'info', summary: 'The contact is added'});
    }

    onRemoveContacts() {
        this.msgs.push(
            {severity: 'info', summary: 'The contact is removed'});
    }

}
