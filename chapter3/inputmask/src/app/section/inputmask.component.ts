import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'inputmask.component.html',
})
export class InputMaskComponent {
    msgs: Message[] = [];

    basic: string;
    event: string;
    phone: string;
    date: string;
    serial: string;
    slot: string;
    optional: string;
    readonly: string;
    format: string = "Option1";

    private items: MenuItem[];

    activeIndex: number = 0;

    ngOnInit() {
        this.items = [
            {
                label: 'Basic',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Basic InputMask', detail: event.item.label});
                }
            },
            {
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Events', detail: event.item.label});
                }
            },
            {
                label: 'MaskFormat Options',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'MaskFormat Options', detail: event.item.label});
                }
            },
            {
                label: 'Slot Char',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'SlotChar', detail: event.item.label});
                }
            },
            {
                label: 'Optional Mask values',
                command: (event: any) => {
                    this.activeIndex = 4;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Optional Mask values', detail: event.item.label});
                }
            },
            {
                label: 'ReadOnly',
                command: (event: any) => {
                    this.activeIndex = 5;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'ReadOnly', detail: event.item.label});
                }
            },
        ];
    }

    onComplete(e:any) {
        this.msgs.push(
            {severity: 'info', summary: 'InputMask is completed'});
    }
}
