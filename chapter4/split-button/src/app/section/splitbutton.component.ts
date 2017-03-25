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

    ngOnInit() {
        this.items = [
            {label: 'Update', icon: 'fa-refresh', command: () => {
                this.update();
            }},
            {label: 'Delete', icon: 'fa-close', command: () => {
                this.delete();
            }},
            {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'}
        ];
    }

    create() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Data is created'});
    }

    update() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Data is updated'});
    }

    delete() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Data is deleted'});
    }
}
