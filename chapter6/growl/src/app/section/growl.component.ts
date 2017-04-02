import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'growl.component.html'
})
export class GrowlComponent {
    msgs: Message[] = [];
    private items: MenuItem[];
    activeIndex: number = 0;

    showInfo() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
    }

    showWarn() {
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
    }

    showError() {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
    }

    showMultiple() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Message 1', detail:'PrimeNG rocks'});
        this.msgs.push({severity:'info', summary:'Message 2', detail:'PrimeUI rocks'});
        this.msgs.push({severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'});
    }

    clear() {
        this.msgs = [];
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
