import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'datascroller.component.html'
})
export class DataScrollerComponent {
    msgs: Message[] = [];

    simple: string;
    event: string;
    phone: string;
    date: string;
    serial: string;
    slot: string;
    optional: string;
    format: string = "Option1";

    onComplete() {
        this.msgs.push(
            {severity: 'info', summary: 'InputMask completed'});
    }
}
