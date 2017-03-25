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

    onChange(e:any) {
        this.msgs = [];
        if(e.checked) {
            this.msgs.push({severity: 'info', summary: 'I confirm the booking'});
        } else{
            this.msgs.push({severity: 'info', summary: 'I reject the booking'});
        }
    }
}
