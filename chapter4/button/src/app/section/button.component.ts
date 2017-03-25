import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'button.component.html'
})
export class ButtonComponent {
    msgs: Message[] = [];

    clicks: number = 0;
    
    clickMe() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The button is clicked '+(++this.clicks)+' times'});
    }
}
