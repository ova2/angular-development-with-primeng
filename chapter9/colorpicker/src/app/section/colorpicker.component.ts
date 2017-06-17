import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'colorpicker.component.html'
})
export class ColorPickerComponent {
    msgs: Message[] = [];
    color1: string = '55ff66';

    color2: string;

    color3: string;

    activeIndex: number = 0;

    colorFormat1: string;

    colorFormat2: string;

    colorFormat3: string;

    onChangeColor(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The new Color is selected ' + event.value});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
