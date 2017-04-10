import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'fieldset.component.html'
})
export class FieldsetComponent {
    msgs: Message[] = [];
    
    basic: string;

    activeIndex: number = 0;

    beforeToggle() {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'Before toggle the content'});
    }

    afterToggle() {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'After toggle the content'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
