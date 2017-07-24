import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'splitbutton.component.html'
})
export class SplitButtonComponent {
    msgs: Message[] = [];

    items: MenuItem[];
    itemsIcons: MenuItem[];

    activeIndex: number = 0;

    ngOnInit() {
        this.items = [
            {label: 'Update', command: () => {
                this.update();
            }},
            {label: 'Delete', command: () => {
                this.delete();
            }},
            {label: 'AngularConnect', url: 'https://www.angularconnect.com'}
        ];

        this.itemsIcons = [
            {label: 'Update', icon: 'fa-refresh', command: () => {
                this.update();
            }},
            {label: 'Delete', icon: 'fa-close', command: () => {
                this.delete();
            }},
            {label: 'AngularConnect', icon: 'fa-link', url: 'https://www.angularconnect.com'}
        ];
    }

    create() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Success', detail: 'AngularConnect user account is created'});
    }

    update() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Success', detail: 'AngularConnect user account is updated'});
    }

    delete() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Success', detail: 'AngularConnect user account is deleted'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
