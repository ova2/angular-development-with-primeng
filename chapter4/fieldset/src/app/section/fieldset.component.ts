import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'fieldset.component.html'
})
export class FieldsetComponent {
    msgs: Message[] = [];
    
    basic: string;

    beforeToggle() {
        this.msgs.push(
            {severity: 'info', summary: 'Before toggle the content'});
    }

    afterToggle() {
        this.msgs.push(
            {severity: 'info', summary: 'After toggle the content'});
    }
}
