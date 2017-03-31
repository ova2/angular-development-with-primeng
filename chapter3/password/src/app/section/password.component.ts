import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'password.component.html'
})
export class PasswordComponent {
    password: string;

    private items: MenuItem[];
    activeIndex: number = 0;

    ngOnInit() {
        this.items = [
            {
                label: 'Basic',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Basic Password', detail: event.item.label});
                }
            },
            {
                label: 'Customized Password',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Customized display of Password', detail: event.item.label});
                }
            }
        ];
    }
}
