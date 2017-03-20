import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'checkbox.component.html'
})
export class CheckboxComponent {
    msgs: Message[] = [];
    
    checked: boolean;
    selectedVersions: string;
    status: any;
    
    onComplete() {
        this.msgs.push(
            {severity: 'info', summary: 'Checkbox status is changed});
    }
}
