import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'tabview.component.html'
})
export class TabViewComponent {

    msgs: Message[] = [];

    activeIndex: number = 0;

    onTabChange(event:any) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }

    onTabClose(event:any) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab closed', detail: 'Index: ' + event.index});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
