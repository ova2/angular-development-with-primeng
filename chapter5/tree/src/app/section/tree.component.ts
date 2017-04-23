import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'tree.component.html'
})
export class TreeComponent {
    msgs: Message[] = [];
    activeIndex: number = 0;

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

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
