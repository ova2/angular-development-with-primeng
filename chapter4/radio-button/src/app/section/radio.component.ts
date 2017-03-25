import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'radio.component.html'
})
export class RadioButtonComponent {
    msgs: Message[] = [];
    
    basic: string;
    advanced: string = "Angular";

    selectFramework() {
        this.msgs=[];
        this.msgs.push({severity: 'info', summary: this.advanced+' is selected as SPA technology'});
    }
}
