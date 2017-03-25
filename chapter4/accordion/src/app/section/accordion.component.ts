import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'accordion.component.html'
})
export class AccordionComponent {
    msgs: Message[];

    onTabClose(event:any) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index});
    }

    onTabOpen(event:any) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }
}
