import {Component} from '@angular/core';
import {Message,MenuItem,SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'slider.component.html'
})
export class SliderComponent {
    msgs: Message[] = [];

    basicinput: number;

    custominput: number = 20;

    rangeinput: number;

    sliderinput: number;

    animateinput: number;

    verticalinput: number;

    rangeValues: number[] = [30,90];

    types: SelectItem[];

    selectedType:string = 'readonly';

    private items: MenuItem[];
    activeIndex: number = 0;
    
    onChange() {
        this.msgs.push(
            {severity: 'info', summary: 'Slider new value is'+this.stepinput});
    }

    onSlideEnd() {
        this.msgs.push(
            {severity: 'info', summary: 'Slide end is reached'});
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
