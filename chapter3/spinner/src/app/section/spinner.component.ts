import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'spinner.component.html'
})
export class SpinnerComponent {
    msgs: Message[] = [];

    basicinput: number;

    custominput: number;

    readonlyinput: number = 50;

    disabledinput: number = 100;
    
    onChange(event:any) {
        this.msgs.push(
            {severity: 'info', summary: 'Spinner new value is '+this.basicinput});
    }
}
