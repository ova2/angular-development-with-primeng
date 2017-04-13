import {Component} from '@angular/core';
import {Message,MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'dialog.component.html'
})
export class DialogComponent {
    basic: boolean = false;
    custom: boolean = false;
    advanced: boolean = false;

    msgs: Message[] = [];
    activeIndex: number = 0;
    private items: MenuItem[];

    showBasicDialog() {
        this.basic = true;
        this.custom = false;
        this.advanced = false;
    }

    showCustomDialog() {^^>
        this.basic = false;
        this.custom = true;
        this.advanced = false;
    }

    showAdvancedDialog() {
        this.basic = false;
        this.custom = false;
        this.advanced = true;
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {

    }
}
