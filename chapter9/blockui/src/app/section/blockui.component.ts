import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'blockui.component.html'
})
export class BlockUIComponent {
    blockedPanel: boolean = false;

    blockedDocument: boolean = false;

    blockDocument() {
        this.blockedDocument = true;
        setTimeout(() => {
            this.blockedDocument = false;
        }, 3000);
    }
}
