import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'messages.component.html'
})
export class MessagesComponent {
    messages: Message[] = [];
    msgs: Message[] = [];
    activeIndex: number = 0;

    showMessage() {
        this.messages = [];
        this.messages.push({severity:'info', summary:'Angular Message', detail:'Angular4 is ready'});
    }

    showSuccess() {
        this.messages = [];
        this.messages.push({severity:'info', summary:'Angular Message', detail:'Angular4 is ready'});
    }

    showInfo() {
        this.messages = [];
        this.messages.push({severity:'info', summary:'Info Message', detail:'PrimeNG4 is ready'});
    }

    showWarn() {
        this.messages = [];
        this.messages.push({severity:'warn', summary:'Warn Message', detail:'Upgrade to PrimeNG4 for more features'});
    }

    showError() {
        this.messages = [];
        this.messages.push({severity:'error', summary:'Error Message', detail:'PrimeNG4 is not compatible with Angular2.x'});
    }

    showMultiple() {
        this.messages = [];
        this.messages.push({severity:'info', summary:'Message 1', detail:'TypeScript is awesome'});
        this.messages.push({severity:'info', summary:'Message 2', detail:'Angular is awesome'});
        this.messages.push({severity:'info', summary:'Message 3', detail:'PrimeNG is awesome'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    clearMessages() {
        this.messages = [];
    }
}
