import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/primeng';

@Component({
    selector: 'section',
    templateUrl: 'breadcrum.component.html'
})
export class BreadcrumbComponent {
    private items: MenuItem[];

    ngOnInit() {
        this.items = [];
        this.items.push({label:'Categories'});
        this.items.push({label:'Sports'});
        this.items.push({label:'Football'});
        this.items.push({label:'Countries'});
        this.items.push({label:'Spain'});
        this.items.push({label:'F.C. Barcelona'});
        this.items.push({label:'Squad'});
        this.items.push({label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'});
    }
}
