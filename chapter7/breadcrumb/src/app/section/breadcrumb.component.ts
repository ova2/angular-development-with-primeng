import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/primeng';

@Component({
    selector: 'section',
    templateUrl: 'breadcrumb.component.html'
})
export class BreadcrumbComponent {
    home: MenuItem;
    activeIndex: number = 0;
    msgs: Message[] = [];
    private items: MenuItem[];

    ngOnInit() {
        this.items = [];
        this.items.push({
            label: 'Categories', command: (event) => {
                this.msgs.length = 0;
                this.msgs.push({severity: 'info', summary: event.item.label});
            }
        });
        this.items.push({
            label: 'Best Buy', command: (event) => {
                this.msgs.length = 0;
                this.msgs.push({severity: 'info', summary: event.item.label});
            }
        });
        this.items.push({
            label: 'TV & Video', command: (event) => {
                this.msgs.length = 0;
                this.msgs.push({severity: 'info', summary: event.item.label});
            }
        });
        this.items.push({
            label: 'TVs', command: (event) => {
                this.msgs.length = 0;
                this.msgs.push({severity: 'info', summary: event.item.label});
            }
        });
        this.items.push({
            label: 'Flat Panel TVs', command: (event) => {
                this.msgs.length = 0;
                this.msgs.push({severity: 'info', summary: event.item.label});
            }
        });
        this.items.push({label: 'LED Flat-Panel', url: 'https://en.wikipedia.org/wiki/LED_display'});

        this.home = {
            label: 'Home',icon: 'fa-globe', command: (event) => {
                this.msgs.length = 0;
                this.msgs.push({severity: 'info', summary: 'Home'});
            }
        };
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
