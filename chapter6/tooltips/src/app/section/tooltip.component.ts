import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'tooltip.component.html'
})
export class TooltipComponent {
    msgs: Message[] = [];

}
