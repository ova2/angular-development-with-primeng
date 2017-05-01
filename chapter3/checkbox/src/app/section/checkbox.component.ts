import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'checkbox.component.html'
})
export class CheckboxComponent {
    msgs: Message[] = [];

    checked: boolean;
    selectedVersions: string[] = ['AngularJS1.0','AngularV4.0'];
    status: any = true;
    feature: boolean = true;

    activeIndex: number = 0;

    onChangeCheckbox() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Checkbox status is changed'});
    }

    onChangeTristate() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Tristate Checkbox status is changed'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
