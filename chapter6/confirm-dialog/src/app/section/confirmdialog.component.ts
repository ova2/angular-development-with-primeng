import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {ConfirmationService} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'confirmdialog.component.html'
})
export class ConfirmDialogComponent {

    msgs: Message[] = [];
    activeIndex: number = 0;

    constructor(private confirmationService: ConfirmationService) {}

    confirmAccept() {
        this.confirmationService.confirm({
            message: 'Do you want to subscribe AngularNews?',
            header: 'Subscribe Confirmation',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.msgs = [];
                this.msgs.push({severity:'info', summary:'Confirmed', detail:'You have accepted'});
            }
        });
    }

    confirmDelete() {
        this.confirmationService.confirm({
            message: 'Do you want to delete AngularNews account?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.msgs = [];
                this.msgs.push({severity:'info', summary:'Confirmed', detail:'The record is deleted'});
            }
        });
    }


    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {

    }
}
