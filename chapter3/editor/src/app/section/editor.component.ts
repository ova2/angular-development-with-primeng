import {Component} from '@angular/core';
import {Message,MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'editor.component.html'
})
export class EditorComponent {
    msgs: Message[] = [];

    basictext: string = '<div>Hello Angular Folks!</div><div>Get ready to play with PrimeNG <b>Editor</b></div><div><br></div>';

    eventstext: string = 'PrimeNG <b>Editor</b> supports <b>onTextChange</b> and <b>onSelectionChange</b> events.';

    customtext: string = 'PrimeNG <b>Editor</b> toolbar is customized by defining elements inside header.';

    readonlytext: string = 'PrimeNG <b>Editor</b> is rich text editor component based on <i>Quill</i> Edtior 1.0.';

    activeIndex: number = 0;
    private items: MenuItem[];


    onTextChange() {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'The editor text is changed'});
    }

    onSelectionChange() {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'The editor selected text is changed'});
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Default Toolbar',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Default Toolbar', detail: event.item.label});
                }
            },
            {
                label: 'Customized Toolbar',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Customized display of Toolbar', detail: event.item.label});
                }
            },
            {
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Editor events: onTextChange, onSelectionChange', detail: event.item.label});
                }
            },
            {
                label: 'ReadOnly',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'ReadOny editor', detail: event.item.label});
                }
            }
        ];
    }


}
