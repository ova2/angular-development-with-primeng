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
    feature: boolean = true;

    activeIndex: number = 0;
    private items: MenuItem[];

    onChangeCheckbox() {
        this.msgs=[];
        this.msgs.push({severity: 'info', summary: 'Checkbox status is changed'});
    }

    onChangeTristate() {
        this.msgs=[];
        this.msgs.push({severity: 'info', summary: 'Tristate Checkbox status is changed'});
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Single selection',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Single checkbox feature', detail: event.item.label});
                }
            },
            {
                label: 'Multiple selection',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Multiple checkbox feature', detail: event.item.label});
                }
            },
            {
                label: 'TriState',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'TriState Checkbox feature', detail: event.item.label});
                }
            },
            {
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Events feature', detail: event.item.label});
                }
            },
            {
                label: 'Disabled',
                command: (event: any) => {
                    this.activeIndex = 4;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Disabled feature', detail: event.item.label});
                }
            },{
                label: 'Single selection',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Single checkbox feature', detail: event.item.label});
                }
            },
            {
                label: 'Multiple selection',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Multiple checkbox feature', detail: event.item.label});
                }
            },
            {
                label: 'TriState',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'TriState Checkbox feature', detail: event.item.label});
                }
            },
            {
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Events feature', detail: event.item.label});
                }
            },
            {
                label: 'Disabled',
                command: (event: any) => {
                    this.activeIndex = 4;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Disabled feature', detail: event.item.label});
                }
            },
        ];
    }
}
