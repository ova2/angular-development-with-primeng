import {Component} from '@angular/core';
import {Message,SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'spinner.component.html'
})
export class SpinnerComponent {
    msgs: Message[] = [];

    basicinput: number;

    custominput: number;

    separatorinput:number;

    eventsinput: number;

    readonlyinput: number = 50;

    disabledinput: number = 100;

    types: SelectItem[];

    selectedType:string = 'readonly';

    activeIndex: number = 0;
    
    onChange(event:any) {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'Spinner value is changed'});
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
