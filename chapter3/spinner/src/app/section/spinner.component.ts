import {Component} from '@angular/core';
import {Message,SelectItem,MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'spinner.component.html'
})
export class SpinnerComponent {
    msgs: Message[] = [];

    basicinput: number;

    custominput: number;

    separatorinput:number;

    eventsinput: number;

    readonlyinput: number = 50;

    disabledinput: number = 100;

    types: SelectItem[];

    selectedType:string = 'readonly';

    private items: MenuItem[];
    activeIndex: number = 0;
    
    onChange(event:any) {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'Spinner new value is '+this.basicinput});
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Basic',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Basic spinner', detail: event.item.label});
                }
            },
            {
                label: 'Customized',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Customized Input', detail: event.item.label});
                }
            },
            {
                label: 'Separators',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Separators Input', detail: event.item.label});
                }
            },{
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Events: onChange', detail: event.item.label});
                }
            },
            {
                label: 'ReadOnly/Disabled',
                command: (event: any) => {
                    this.activeIndex = 4;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'ReadOnly or disabled input', detail: event.item.label});
                }
            },
        ];
        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});

    }
}
