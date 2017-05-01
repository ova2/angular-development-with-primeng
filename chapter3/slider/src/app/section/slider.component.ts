import {Component} from '@angular/core';
import {Message,SelectItem} from 'primeng/components/common/api';

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

    selectedType: string = 'readonly';

    activeIndex: number = 0;
    
    onChange() {
        this.msgs.length = 0;
        this.msgs.push(
            {severity: 'info', summary: 'Slider value is changed'});
    }

    onSlideEnd() {
        this.msgs.length = 0;
        this.msgs.push(
            {severity: 'info', summary: 'Slide end is reached'});
    }

    ngOnInit() {

        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});

    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
