import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'password.component.html'
})
export class PasswordComponent {
    password: string;
    msgs: Message[] = [];
    activeIndex: number = 0;

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
