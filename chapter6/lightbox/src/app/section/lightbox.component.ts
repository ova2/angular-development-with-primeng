import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'lightbox.component.html'
})
export class LightboxComponent {
    images: any[];
    msgs: Message[] = [];
    private items: MenuItem[];
    activeIndex: number = 0;

    constructor() {
    }
    ngOnInit() {

        this.images = [];
        this.images.push({source:'showcase/resources/demo/images/sopranos/sopranos1.jpg', thumbnail: 'showcase/resources/demo/images/sopranos/sopranos1_small.jpg', title:'Sopranos 1'});
        this.images.push({source:'showcase/resources/demo/images/sopranos/sopranos2.jpg', thumbnail: 'showcase/resources/demo/images/sopranos/sopranos2_small.jpg', title:'Sopranos 2'});
        this.images.push({source:'showcase/resources/demo/images/sopranos/sopranos3.jpg', thumbnail: 'showcase/resources/demo/images/sopranos/sopranos3_small.jpg', title:'Sopranos 3'});
        this.images.push({source:'showcase/resources/demo/images/sopranos/sopranos4.jpg', thumbnail: 'showcase/resources/demo/images/sopranos/sopranos4_small.jpg', title:'Sopranos 4'});

        this.items = [
            {
                label: 'Basic',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Basic lightbox', detail: event.item.label});
                }
            },
            {
                label: 'Custom',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Custom  content', detail: event.item.label});
                }
            },
            {
                label: 'Advanced',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Advanced', detail: event.item.label});
                }
            }
        ];
    }
}
