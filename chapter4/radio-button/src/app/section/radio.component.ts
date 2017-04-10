import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'radio.component.html'
})
export class RadioButtonComponent {
    msgs: Message[] = [];
    
    basic: string;
    defaultSelection: string = "Angular";
    eventsSelection: string;
    disabledSelection: string = "Angular";

    activeIndex: number = 0;

    selectFramework(e:any) {
        this.msgs=[];
        this.msgs.push({severity: 'info', summary: this.defaultSelection+' is selected as SPA technology'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
