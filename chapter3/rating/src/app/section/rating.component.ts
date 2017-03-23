import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'rating.component.html'
})
export class RatingComponent {
    msgs: Message[] = [];

    angular: number = 5;

    react: number;

    ember: number;

    knockout:number = 4;

    vuejs: number = 3;

    handleRate(event:any) {
        this.msgs.push(
            {severity: 'info', summary: 'You have rated with' + event.value});
    }

    handleCancel(event:any) {
    this.msgs.push(
        {severity: 'info', summary: 'Rating is Cancelled'});
    }
}
