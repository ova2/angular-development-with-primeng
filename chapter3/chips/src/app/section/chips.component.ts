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

    private items: MenuItem[];
    activeIndex: number = 0;
    
    onAddContacts() {
        this.msgs.push(
            {severity: 'info', summary: 'The contact is added'});
    }

    onRemoveContacts() {
        this.msgs.push(
            {severity: 'info', summary: 'The contact is removed'});
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Basic',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Basic Chips', detail: event.item.label});
                }
            },
            {
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Chips events', detail: event.item.label});
                }
            },
            {
                label: 'Customized Display',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Customized display of Chips', detail: event.item.label});
                }
            }
        ];
    }

}
