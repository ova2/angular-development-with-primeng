import {Component} from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'toolbar.component.html'
})
export class ToolbarComponent {
    items: MenuItem[];
    search: string;
    ngOnInit() {
        this.items = [
            {label: 'Cut', icon: 'fa-cut'},
            {label: 'Copy', icon: 'fa-copy'},
            {label: 'Paste', icon: 'fa-paste'},
        ];
    }

}
