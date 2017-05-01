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

    knockout: number = 2;

    vuejs: number = 3;

    types: SelectItem[];

    selectedType: string = 'readonly';

    activeIndex: number = 0;

    handleRate(event: any) {
        this.msgs.push(
            {severity: 'info', summary: 'You have rated with ' + event.value});
    }

    handleCancel(event: any) {
    this.msgs.push(
        {severity: 'info', summary: 'Rating is Cancelled'});
    }

    ngOnInit() {
        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});

    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
