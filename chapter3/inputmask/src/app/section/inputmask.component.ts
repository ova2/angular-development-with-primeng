import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'inputmask.component.html'
})
export class InputMaskComponent {
    msgs: Message[] = [];

    simple: string;
    event: string;
    phone: string;
    date: string;
    serial: string;
    slot: string;
    optional: string;
    format: string = "Option1";

    onComplete(e:any) {
        this.msgs.push(
            {severity: 'info', summary: 'InputMask is completed'});
    }
}
