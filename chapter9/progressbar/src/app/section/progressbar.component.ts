import {Component, OnInit, OnDestroy} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

@Component({
    selector: 'section',
    templateUrl: 'progressbar.component.html'
})
export class ProgressBarComponent implements OnInit, OnDestroy {
    msgs: Message[];

    value: number;
    interval$: Subscription;

    ngOnInit() {
        const interval = Observable.interval(800).take(100);
        this.interval$ = interval.subscribe(
            x => this.value = x + 1,
            () => {/** no error handling */ },
            () => this.msgs = [{severity: 'info', summary: 'Success', detail: 'Process completed'}]
        );
    }

    ngOnDestroy() {
        this.interval$.unsubscribe();
    }
}
