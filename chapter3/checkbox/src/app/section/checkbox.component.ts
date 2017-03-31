import {Component} from '@angular/core';
import {Message,MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'checkbox.component.html'
})
export class CheckboxComponent {
    msgs: Message[] = [];

    checked: boolean;
    selectedVersions: string[]=['AngularJS1.0','AngularV4.0'];
    status: any= true;

    private items: MenuItem[];
    activeIndex: number = 0;
    
    onChange() {
        this.msgs=[]
        this.msgs.push({severity: 'info', summary: 'Checkbox status is changed'});
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Single selection',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Single checkbox', detail: event.item.label});
                }
            },
            {
                label: 'Multiple selection',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Multiple checkbox', detail: event.item.label});
                }
            },
            {
                label: 'TriState',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'MaskFormat Options', detail: event.item.label});
                }
            },
            {
                label: 'Object display',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'SlotChar', detail: event.item.label});
                }
            },
            {
                label: 'Templating',
                command: (event: any) => {
                    this.activeIndex = 4;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Optional Mask values', detail: event.item.label});
                }
            },
            {
                label: 'ReadOnly/Disabled',
                command: (event: any) => {
                    this.activeIndex = 5;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'ReadOnly', detail: event.item.label});
                }
            },
        ];
    }
}
