import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'panel.component.html'
})
export class PanelComponent {
    msgs: Message[] = [];

    items: MenuItem[];

    activeIndex: number = 0;

    ngOnInit() {
        this.items = [
            {label: 'Showcase', icon: 'fa-briefcase', url: 'https://www.primefaces.org/primeng/'},
            {label: 'Github', icon: 'fa-github-square', url: 'https://github.com/primefaces/primeng'},
            {label: 'Forum', icon: 'fa-forumbee', url: 'https://forum.primefaces.org/viewforum.php?f=35'},
        ];
    }

    beforeToggle() {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'Before toggle the content'});
    }

    afterToggle() {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'After toggle the content'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
