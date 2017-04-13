import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'lightbox.component.html'
})
export class LightboxComponent {
    images: any[];
    msgs: Message[] = [];
    activeIndex: number = 0;

    ngOnInit() {
        this.images = [];
        this.images.push({source: '/assets/data/images/primefaces.png',
            thumbnail: '/assets/data/images/primefaces.png', title: 'PrimeFaces'});
        this.images.push({source: '/assets/data/images/primeng.png',
            thumbnail: '/assets/data/images/primeng.png', title: 'PrimeNG'});
        this.images.push({source: '/assets/data/images/primereact.png',
            thumbnail: '/assets/data/images/primereact.png', title: 'PrimeReact'});
        this.images.push({source: '/assets/data/images/primeui.svg',
            thumbnail: '/assets/data/images/primeui.svg', title: 'PrimeUI'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
