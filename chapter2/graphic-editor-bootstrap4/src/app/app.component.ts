import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'ge-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'SVG Graphic-Engine',
                icon: 'fa-paint-brush',
                routerLink: '/svg'
            },
            {
                label: 'Canvas Graphic-Engine',
                icon: 'fa-paint-brush',
                routerLink: '/canvas'
            }
        ];
    }
}
