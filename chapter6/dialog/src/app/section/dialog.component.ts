import {Component} from '@angular/core';
import {Message,MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'dialog.component.html'
})
export class DialogComponent {
    basic: boolean = false;
    custom: boolean = false;
    advanced: boolean = false;

    msgs: Message[] = [];
    private items: MenuItem[];
    activeIndex: number = 0;

    showBasicDialog() {
        this.basic = true;
        this.custom = false;
        this.advanced = false;
    }

    showCustomDialog() {
        this.basic = false;
        this.custom = true;
        this.advanced = false;
    }

    showAdvancedDialog() {
        this.basic = false;
        this.custom = false;
        this.advanced = true;
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Basic',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Basic dialog', detail: event.item.label});
                }
            },
            {
                label: 'Custom',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Custom', detail: event.item.label});
                }
            },
            {
                label: 'Advanced',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Advanced', detail: event.item.label});
                }
            }
        ];
    }
}
