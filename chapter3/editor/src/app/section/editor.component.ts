import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'editor.component.html'
})
export class EditorComponent {
    msgs: Message[] = [];

    basictext: string = '<div>Hello Angular Folks!</div><div>Get ready to play with PrimeNG <b>Editor</b></div><div><br></div>';

    eventstext: string;

    customtext: string;

    private items: MenuItem[];
    activeIndex: number = 0;

    onTextChange() {
        this.msgs.push(
            {severity: 'info', summary: 'The editor text is changed'});
    }

    onSelectionChange() {
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
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Editor events', detail: event.item.label});
                }
            },
            {
                label: 'Customized Toolbar',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Customized display of Toolbar', detail: event.item.label});
                }
            }
        ];
    }


}
