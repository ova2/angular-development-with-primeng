import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'inputmask.component.html',
})
export class InputMaskComponent {
    activeIndex: number = 0;

    basic: string;
    event: string;
    phone: string;
    date: string;
    serial: string;
    slot: string;
    optional: string;
    readonly: boolean = true;
    disabled: boolean = true;
    format: string = 'Option1';

    msgs: Message[] = [];

    onComplete(e: any) {
        this.msgs.length = 0;
        this.msgs.push(
            {severity: 'info', summary: 'InputMask is completed'});
    }
    
    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
