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

    onTextChange() {
        this.msgs.push(
            {severity: 'info', summary: 'The editor text is changed'});
    }

    onSelectionChange() {
        this.msgs.push(
            {severity: 'info', summary: 'The editor selected text is changed'});
    }


}
