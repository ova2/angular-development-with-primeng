import {Component} from '@angular/core';
import {Message,SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'rating.component.html'
})
export class RatingComponent {
    msgs: Message[] = [];

    angular: number = 5;

    react: number;

    ember: number = 6;

    knockout:number;

    vuejs: number = 3;

    types: SelectItem[];

    private items: MenuItem[];
    activeIndex: number = 0;

    handleRate(event:any) {
        this.msgs.push(
            {severity: 'info', summary: 'You have rated with ' + event.value});
    }

    handleCancel(event:any) {
    this.msgs.push(
        {severity: 'info', summary: 'Rating is Cancelled'});
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Basic',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Basic Rating', detail: event.item.label});
                }
            },
            {
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Rating Events', detail: event.item.label});
                }
            },{
                label: 'Cancel Control',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Cancel Control Rating', detail: event.item.label});
                }
            },
            {
                label: 'ReadOnly/Disabled',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'ReadOnly or disabled rating', detail: event.item.label});
                }
            },
        ];
        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});

    }
}
