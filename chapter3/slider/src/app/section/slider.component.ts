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

    eventsinput: number;

    disabledinput: number;

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
            {severity: 'info', summary: 'Slider value is changed'});
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
                    this.msgs.push({severity:'info', summary:'Basic slider input', detail: event.item.label});
                }
            },
            {
                label: 'Step',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Step Input', detail: event.item.label});
                }
            },
            {
                label: 'Slider with input',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Slider with input', detail: event.item.label});
                }
            },
            {
                label: 'Animate',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Slider with animation', detail: event.item.label});
                }
            },
            {
                label: 'Orientation',
                command: (event: any) => {
                    this.activeIndex = 4;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Slider with Orientation', detail: event.item.label});
                }
            },
            {
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 5;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Events: onChange, onSlideEnd', detail: event.item.label});
                }
            },
            {
                label: 'Disabled',
                command: (event: any) => {
                    this.activeIndex = 6;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Disabled input', detail: event.item.label});
                }
            },
            {
                label: '(Customized slider)',
                command: (event: any) => {
                    this.activeIndex = 7;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Customized slider', detail: event.item.label});
                }
            }
        ];
        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});

    }
}
