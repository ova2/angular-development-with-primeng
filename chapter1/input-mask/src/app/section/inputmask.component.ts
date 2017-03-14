import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'inputmask.component.html'
})
export class InputMaskComponent {
    msgs: Message[] = [];
    
    basic: string;
}
