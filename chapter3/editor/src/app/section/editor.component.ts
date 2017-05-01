import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

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

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
