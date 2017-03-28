import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'progressbar.component.html'
})
export class ProgressBarComponent {
    value: number = 0;

    msgs: Message[];

    ngOnInit() {
        let interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if(this.value >= 100) {
                this.value = 100;
                this.msgs = [{severity: 'info', summary: 'Success', detail: 'Process Completed'}];
                clearInterval(interval);
            }
        }, 2000);
    }
}
