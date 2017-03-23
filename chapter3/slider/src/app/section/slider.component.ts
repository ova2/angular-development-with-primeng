import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'slider.component.html'
})
export class SliderComponent {
    msgs: Message[] = [];

    basicinput: number;

    stepinput: number = 20;

    rangeinput: number;

    sliderinput: number;

    animateinput: number;

    verticalinput: number;

    rangeValues: number[] = [30,90];
    
    onChange() {
        this.msgs.push(
            {severity: 'info', summary: 'Slider new value is'+this.stepinput});
    }

    onSlideEnd() {
        this.msgs.push(
            {severity: 'info', summary: 'Slide end is reached'});
    }
}
