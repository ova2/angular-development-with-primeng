import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'togglebutton.component.html'
})
export class ToggleButtonComponent {
    msgs: Message[] = [];

    basic: boolean = false;

    customized: boolean = true;

    events: boolean = false;

    disabled: boolean = false;

    activeIndex: number = 0;

    onToggleButton(e: any) {
        this.msgs = [];
        if (e.checked) {
            this.msgs.push({severity: 'info', summary: 'I confirm the booking'});
        } else {
            this.msgs.push({severity: 'info', summary: 'I reject the booking'});
        }
    }

    onChange(e: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The selected options are ' + e.value});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
