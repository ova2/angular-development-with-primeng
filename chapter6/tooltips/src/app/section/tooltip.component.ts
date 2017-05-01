import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'tooltip.component.html'
})
export class TooltipComponent {
    msgs: Message[] = [];
    activeIndex: number = 0;

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
