import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'dialog.component.html'
})
export class DialogComponent {
    basic: boolean = false;
    custom: boolean = false;
    advanced: boolean = false;
    events: boolean = false;

    msgs: Message[] = [];
    activeIndex: number = 0;

    showBasicDialog() {
        this.basic = true;
        this.custom = false;
        this.advanced = false;
        this.events = false;
    }

    showCustomDialog() {
        this.basic = false;
        this.custom = true;
        this.advanced = false;
        this.events = false;
    }

    showAdvancedDialog() {
        this.basic = false;
        this.custom = false;
        this.advanced = true;
        this.events = false;
    }

    showEventsDialog() {
        this.basic = false;
        this.custom = false;
        this.advanced = false;
        this.events = true;
    }

    showDialog() {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Show dialog', detail:'When dialog is shown'});
    }

    hideDialog() {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Hide dialog', detail:'when dialog is hidden'});
    }

    onComplete() {
        this.custom = false;
        this.advanced = false;
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {

    }
}
