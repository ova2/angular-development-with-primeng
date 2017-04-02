import {Component} from '@angular/core';
import {Message,MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'tooltip.component.html'
})
export class TooltipComponent {
    msgs: Message[] = [];
    private items: MenuItem[];
    activeIndex: number = 0;

    ngOnInit() {

        this.items = [
            {
                label: 'Basic',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Basic lightbox', detail: event.item.label});
                }
            },
            {
                label: 'Custom',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Custom  content', detail: event.item.label});
                }
            },
            {
                label: 'Advanced',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Advanced', detail: event.item.label});
                }
            }
        ];
    }

}
